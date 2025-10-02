let disp = document.getElementById("display");

        function press(val) { disp.value += val; }
        function clr() { disp.value = ""; }
        function equal() { try { disp.value = eval(disp.value); } catch { disp.value = "Error"; } }
        function sqrt() { disp.value = Math.sqrt(parseFloat(disp.value) || 0); }
        function square() { disp.value = Math.pow(parseFloat(disp.value) || 0, 2); }
        function pow() {
            let values = disp.value.split(/[^0-9.]/);
            if (values.length >= 2) {
                let a = parseFloat(values[0]);
                let b = parseFloat(values[1]);
                disp.value = Math.pow(a, b);
            }
        }