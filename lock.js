

Module.register('autolock', {
    start: function () {
		    Log.info("Starting module: " + this.name);
    },
  getDom: function () {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = '<p style="color: red;">hello there</p>';
    return wrapper;
  }
});
