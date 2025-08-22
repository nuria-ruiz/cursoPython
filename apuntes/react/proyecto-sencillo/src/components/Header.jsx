import React from 'react';
const Header = () => { const
handleClick = () => {
console.log('¡Haz hecho clic en el botón!');
};
return (
<header>
<h1>Web Corporativa</h1>
<button onClick={handleClick}>Haz clic aquí</button>
</header>
);
};
export default Header;