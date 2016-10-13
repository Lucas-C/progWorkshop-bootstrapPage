[].forEach.call(document.getElementsByClassName("code-mirror"), function (editorElem) {
    var editor = CodeMirror(editorElem, {
        value: editorElem.textContent.replace(/^\s*\n/gm, '').trim(),
        mode:  "javascript",
        theme: "monokai",
        lineNumbers: true,
    });
    editor.on("change", changeFunction)
    function changeFunction() {
        var canvasId = editorElem.dataset.canvasId;
        var canvas = document.getElementById(canvasId);
        window[canvasId] = canvas.getContext('2d');
        window[canvasId].clearRect(0, 0, canvas.width, canvas.height);
        eval(editor.getValue());
    };
    changeFunction();
    editorElem.removeChild(editorElem.firstChild);
});
