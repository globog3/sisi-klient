//1 file 1 function utama
//1 fuction 1 return
//1 return 1 element

//setiap nama fuction dimulai huruf gede

function Contoh1(){
  return <h1>Judul Berita</h1>
}

function Artikel1(){
  return<div>
    <h1>Judul Rtikel 1</h1>
    <p>isi artikel 1</p>
  </div>
}
function Artikel2(){
  return<div>
    <h1>Judul Rtikel 2</h1>
    <p>isi artikel 2</p>
  </div>
}
function Artikel3(){
  return<div>
    <h1>Judul Rtikel 3</h1>
    <p>isi artikel 3</p>
  </div>
}

function Contoh2() {
  return <div>
  <h1>Judul Berita</h1>
  <p>isi berita yang panjang</p>
  </div>
}

//function utaman di file ini 
function App(){
  return (
    <div>
      <Artikel1/>
      <Artikel2/>
      <Artikel3/>
    </div>
  )
}

export default App;