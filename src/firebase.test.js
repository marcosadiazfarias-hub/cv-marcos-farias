import { beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('firebase/analytics', () => ({
  isSupported: vi.fn(),
  getAnalytics: vi.fn(),
}));

import { isSupported, getAnalytics } from 'firebase/analytics';
import { app, firebaseConfig, initAnalytics } from './firebase';

describe('Firebase module', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should export correct firebaseConfig', () => {
    expect(firebaseConfig).toBeDefined();
    expect(firebaseConfig.projectId).toBe('dev-marcos-farias');
    expect(firebaseConfig.measurementId).toBe('G-YR4686FB2Z');
    expect(app).toBeDefined();
  });

  it('should return analytics instance when supported', async () => {
    const mockAnalytics = { app };
    vi.mocked(isSupported).mockResolvedValue(true);
    vi.mocked(getAnalytics).mockReturnValue(mockAnalytics);

    const result = await initAnalytics();
    expect(result).toBe(mockAnalytics);
  });

  it('should return null when analytics is not supported', async () => {
    vi.mocked(isSupported).mockResolvedValue(false);

    const result = await initAnalytics();
    expect(result).toBeNull();
  });

  it('should return null and handle errors when isSupported fails', async () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    vi.mocked(isSupported).mockRejectedValue(new Error('IndexedDB not supported'));

    const result = await initAnalytics();
    expect(result).toBeNull();
    expect(consoleSpy).toHaveBeenCalled();
  });
});
