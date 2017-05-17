var source = new EventSource('sse');

source.onmessage = function (event) {
    console.log('onmessage: ' + event.data);
};

source.onopen = function (event) {
    console.log('onopen');
};

source.onerror = function (event) {
    console.log('onerror');
}
