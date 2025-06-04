
var pdfs = {  
    'calculus1': './sheets/calculus.pdf',   
    'physics': './sheets/physics.pdf',
    'Algebra-Trig':'./sheets/Algebra-Trig.pdf',
    'Arm-Assembly':'./sheets/Arm-Assembly.pdf',
    'Chempdf':'./sheets/Chempdf.pdf',
    'Cpp':'./sheets/Cpp.pdf',
    'Diff-EQ':'./sheets/Diff-EQ.pdf',
    'Electricity-and-Magnetism':'./sheets/Electricity-and-Magnetism.pdf',
    'circuits':'./sheets/circuits.pdf',
    'emacs':'./sheets/emacs.pdf',
    'c':'./sheets/Cheatsheet-c.pdf',
    'x86 assembly':'./sheets/x86-64-reference.pdf',
    'windbg':'./sheets/WinDbg-Cheat-Sheet.pdf'
}

var textbooks = {  
    'c': './sheets/c-textbook.pdf',   
    'x86-64 assembly': './sheets/assembly64.pdf',
    'Mobile':'./sheets/Extreme_Privacy_Mobile_Devices-2024.04.01.pdf'
}

function updatePDFCS() { 
        var inputBox = document.getElementById("cheatsheet-options");

        var selectedOption = inputBox.options[inputBox.selectedIndex].value;
        document.getElementById("display-window").src = pdfs[selectedOption];
}

function updatePDFTB() { 
    var inputBox = document.getElementById("textbooks-options");

    var selectedOption = inputBox.options[inputBox.selectedIndex].value;
    document.getElementById("display-window").src = textbooks[selectedOption];
}