import React from 'react'
export default function Footer({ t }){
const year = new Date().getFullYear()
return (
<div style={{color:t.sub}}>
© {year} MiEmpresa • Todos los derechos reservados • <a
href="#politica">Política de privacidad</a>
</div>
)

}