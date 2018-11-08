document.addEventListener('DOMContentLoaded', function(){

    const inputs = document.querySelectorAll('.controls input');
    // console.log(inputs);

    function handleUpdate() {
        // console.log(this.value);
        const suffix = this.dataset;
        console.log(this.dataset);
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

});