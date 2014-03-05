'use strict';

describe('Service: status', function () {

  // load the service's module
  beforeEach(module('githubStatus'));

  // instantiate service
  var githubStatusService;
  beforeEach(inject(function (_githubStatusService_) {
    githubStatusService = _githubStatusService_;
  }));

  it('should do something', function () {
    expect(!!githubStatusService).toBe(true);
  });

});
