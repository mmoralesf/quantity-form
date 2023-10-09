
        let total = 0;
    
        function incrementar(btn) {
    if (total < 2) {
        const amountCell = btn.parentElement.previousElementSibling;
        const currentAmount = parseFloat(amountCell.textContent);
        if (currentAmount < 0.5 * 4) {
            amountCell.textContent = (currentAmount + 0.5).toFixed(1);
            total += 0.5;
            document.getElementById('total').textContent = total.toFixed(1);
        }
    } else {
        Swal.fire({
            icon: 'error',
            title: '¡Ups!',
            html: 'Parece que has llegado al límite de platillos admitidos en tu plan. Por favor considera <a href="#">mejorar tu suscripción</a> para agregar más platillos :)'
        });
    }
}

function incrementarEspecial(btn) {
    const amountCell = btn.parentElement.previousElementSibling;
    const currentAmount = parseFloat(amountCell.textContent);
    if (currentAmount < 0.5 && total < 2) {
        amountCell.textContent = (currentAmount + 0.5).toFixed(1);
        total += 0.5;
        document.getElementById('total').textContent = total.toFixed(1);
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Lo sentimos',
            html: 'Este platillo solo puede ser agregado una vez. Si te interesa pedir más, puedes comprarlo por separado <a href="http://#">aquí</a>.'
        });
    }
}
    
        function decrementar(btn) {
            const amountCell = btn.parentElement.previousElementSibling;
            const currentAmount = parseFloat(amountCell.textContent);
            if (currentAmount > 0) {
                amountCell.textContent = (currentAmount - 0.5).toFixed(1);
                total -= 0.5;
                document.getElementById('total').textContent = total.toFixed(1);
            }
        }
