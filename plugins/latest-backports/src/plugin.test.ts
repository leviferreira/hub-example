import { latestBackportsPlugin } from './plugin';

describe('latest-backports', () => {
  it('should export plugin', () => {
    expect(latestBackportsPlugin).toBeDefined();
  });
});
