const cmsSidebarToggle = () => {
    const body = document.querySelector('body');
    body.classList.add('cms-sidebar');

    if (body.className === 'cms-sidebar') {
        body.classList.add('cms-enlarged');
        body.classList.remove('cms-sidebar');
    } else {
        body.classList.remove('cms-enlarged');
        body.classList.add('cms-sidebar');
    }
}

export default cmsSidebarToggle;