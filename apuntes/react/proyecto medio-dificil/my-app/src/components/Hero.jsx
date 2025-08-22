import React from 'react'
export default function Hero({ t, title, subtitle, ctaText, onCta
}){
return (
<section className="panel" style={{background:t.panel}}>
<div className="row" style={{alignItems:'center',
justifyContent:'space-between'}}>
<div style={{maxWidth:640}}>
<h1 style={{margin:'0 0 8px 0'}}>{title}</h1>
<p style={{color:t.sub, margin:0}}>{subtitle}</p>
<div style={{marginTop:14}}>
<button className="btn"
onClick={onCta}>{ctaText}</button>

</div>
</div>
<div aria-hidden style={{width:220, height:120, border:`1px
dashed ${t.border}`, borderRadius:12, background:'#0c1426'}} />
</div>
</section>
)
}