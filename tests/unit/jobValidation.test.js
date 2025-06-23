// Example of a logic function to test
function isValidJob(job) {
  return job.title && job.company;
}

describe('Job Validation', () => {
  it('should return true for valid job', () => {
    const job = { title: 'SDE', company: 'Google' };
    expect(isValidJob(job)).toBeTruthy();
  });

  it('should return false for missing company', () => {
    const job = { title: 'SDE' };
    expect(isValidJob(job)).toBeFalsy();
  });
});
