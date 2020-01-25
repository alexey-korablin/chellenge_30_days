!function (){
    const controls = document.querySelectorAll('input');
    
    const handleUpdate = (e) => {
        const suffix = e.target.dataset.sizing || '';
        document.documentElement.style.setProperty(
            `--${e.target.name}`,
            e.target.value + suffix
        )
    };

    controls.forEach(c => c.addEventListener('change', handleUpdate));
    controls.forEach(c => c.addEventListener('mousemove', handleUpdate));
}();