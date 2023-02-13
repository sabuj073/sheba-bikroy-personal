const homeSidebarToggle = () => {
    const body = document.querySelector('body');
    body.classList.add('sidebar-open');
    if (body.className === 'sidebar-open') {
        body.classList.add('sidebar-hide');
        body.classList.remove('sidebar-open');
    } else {
        body.classList.remove('sidebar-hide');
        body.classList.add('sidebar-open');
    }
}
export default homeSidebarToggle;