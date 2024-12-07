const topMenu = document.querySelector('#tohc-top-menu');
const toggleTopMenuIcon = document.querySelector('#tohc-toggle-top-menu-icon');

document.addEventListener('click', (e) => {
    if(toggleTopMenuIcon.contains(e.target)){
        //e.target là target khi mình click(vì đang nghe event click) mà nó thuộc(contains) toggleTopMenuIcon thì nhảy vào if = Click to toggleTopMenuIcon
        topMenu.classList.toggle('hidden');
        topMenu.classList.toggle('tohc-topmenu-expanded'); //swap line này và trên nó nếu lỗi :)
        
    }
    else{
        //Click outside from toggleTopMenuIcon 

        if(topMenu.classList.contains('tohc-topmenu-expanded')){
            topMenu.classList.remove('tohc-topmenu-expanded');
            topMenu.classList.add('hidden');
        }   
    }
})