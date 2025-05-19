let editor; // define globally so runCode() can access it

document.addEventListener("DOMContentLoaded", function () {
    // Initialize xterm.js
    const term = new Terminal();
    term.open(document.getElementById("terminal"));

    // Initialize CodeMirror
    editor = CodeMirror.fromTextArea(document.getElementById("code"), {
        lineNumbers: true,
        mode: "python",
        theme: "default",
    });
    
    document.getElementById("toggle-theme").addEventListener("click", function () {
    const isDark = document.body.classList.toggle("dark-mode");
    editor.setOption("theme", isDark ? "dracula" : "default");
    document.getElementById("terminal").style.background = isDark ? "#222" : "#fff";
    document.getElementById("terminal").style.color = isDark ? "#fff" : "#000";
    });
    
    // Bind run button
    document.getElementById("run").addEventListener("click", function () {
        const code = editor.getValue();
        const input = document.getElementById("stdin").value;

        term.clear();

        fetch("/api/run/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ code, input }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.stderr) term.write(data.stderr);
                else term.write(data.stdout);
            });
    });
});
