import Icon from '../images/culversfarm.jpeg';

function makeTitle(name, className) {
    const title = document.createElement('div');
    title.textContent = name;
    title.classList.add(className);
    return title;
}

function makeContainer(className) {
    const div = document.createElement('div');
    div.classList.add(className);
    return div;
}


function makeNavBtn(name, className) {
    const btn = document.createElement('button');
    btn.textContent = name;
    btn.classList.add(className);
    return btn;
}


function makeHeader(left, middle, right, className) {
    const header = document.createElement('header');
    header.classList.add(className);
    header.appendChild(left);
    header.appendChild(middle);
    header.appendChild(right);
    return header;
}

function makeImage(src) {
    const image = new Image();
    image.src = src;
    return image;
}

function makeFooter(content, className) {
    const footer = document.createElement('footer');
    footer.textContent = content;
    footer.classList.add(className);
    return footer;
}


function loadHomePage() {
    const left = makeContainer('left');
    const aboutBtn = makeNavBtn('About', 'about-btn');
    left.appendChild(aboutBtn);
    const middle = makeTitle('Culvers', 'header-title');
    const right = document.createElement('div');
    right.classList.add('header-right')
    const homeBtn = makeNavBtn('Home', 'home-btn');
    const menuBtn = makeNavBtn('Menu', 'menu-btn');
    const locationBtn = makeNavBtn('Locations', 'location-btn');
    right.appendChild(homeBtn);
    right.appendChild(menuBtn);
    right.appendChild(locationBtn);
    const header = makeHeader(left, middle, right, 'header');
    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');
    const mainContentTop = document.createElement('div');
    mainContentTop.classList.add('main-top');
    const farmImg = makeImage(Icon);
    farmImg.classList.add('farm-image');
    const welcome = document.createElement('div');
    welcome.textContent = 'Welcome to Delicious';
    welcome.classList.add('welcome');
    mainContentTop.appendChild(farmImg);
    mainContentTop.appendChild(welcome);
    const mainContentBottom = document.createElement('div');
    mainContentBottom.classList.add('main-bottom');
    const mainContentBottomContent = document.createElement('div');
    mainContentBottomContent.classList.add('about-us');
    mainContentBottomContent.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo assumenda saepe quis sapiente! Suscipit voluptates vero qui, nemo corporis quae sed porro aliquam aut laboriosam inventore mollitia cum quia molestias ipsa consequatur nesciunt unde saepe, ducimus modi veritatis odit, esse non? Rem asperiores nesciunt laboriosam voluptate sapiente obcaecati, recusandae aliquam ipsum, et molestias veritatis quibusdam hic quo sint. Nulla corporis, placeat eligendi tempore debitis qui quod ex repellendus vero vel, autem deleniti cum beatae, saepe repellat? Quis rerum soluta facilis tempora sed, commodi veniam cumque, temporibus corrupti dignissimos sequi fuga cupiditate tenetur perspiciatis delectus, eos impedit omnis! Doloremque explicabo commodi eos inventore quas? Cupiditate neque dicta vel non? Ipsam quidem vero, tempora similique, illum dicta in neque incidunt repudiandae quae beatae nulla. Quam nemo eveniet impedit maiores voluptates aperiam, dolores dolore quas eaque, veritatis sint quod corporis quidem labore dolorum vero quos quisquam nihil ullam? Nemo dolore sapiente consectetur quasi. Autem quos repudiandae vero aperiam, voluptates blanditiis omnis rem iusto dolore, quibusdam ipsa unde laboriosam nostrum aliquid illo rerum quas velit incidunt aspernatur. Sit enim accusantium odit deserunt, dolor voluptas rerum vitae placeat aliquam laboriosam, reiciendis assumenda quos autem sapiente iure doloremque tempora! Laboriosam vel vitae, doloremque facere possimus ipsum dolorum, molestiae deserunt reprehenderit ratione quam. Omnis ab nulla autem fugiat vero. Nobis debitis adipisci, obcaecati iure officia ut recusandae ea accusantium dolorum laboriosam quam amet quaerat ipsam aut repudiandae ullam quisquam inventore officiis velit magni. Eligendi, cumque reiciendis similique sint officiis distinctio praesentium impedit vitae qui et hic id voluptatum eos mollitia tempora vel voluptas, magni voluptatibus, unde optio earum. Perspiciatis reiciendis explicabo aspernatur et recusandae laboriosam sequi iure pariatur blanditiis, labore suscipit voluptate vitae unde facilis est repellat itaque asperiores sit. Fugit voluptatibus quas consequuntur tempora voluptate aliquid delectus, nisi architecto quaerat eius laudantium magni modi ab quod.';
    mainContentBottom.appendChild(mainContentBottomContent);
    mainContent.appendChild(mainContentTop);
    mainContent.appendChild(mainContentBottom);
    const footer = makeFooter('TommyKn', 'footer');
    const mainDiv = document.getElementById('content');
    mainContent.classList.add('active-page');
    mainDiv.appendChild(header);
    mainDiv.appendChild(mainContent);
    mainDiv.appendChild(footer);

}


export default loadHomePage;