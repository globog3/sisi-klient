//1 file 1 function utama
//1 fuction 1 return
//1 return 1 element

//setiap nama fuction dimulai huruf gede

function Nama({nama}){
  return<h3>nama: {nama}</h3>
}

function NIM({nim}){
  return<h1>NIM: {nim}</h1>
}
function Mhs(){
  const mahasiswa = {
    nama: "Adi Priyo Pangestu",
    nim: "A11.2023.15267"
  }

  return <div>
    <Nama nama={mahasiswa.nama} />
    <NIM nim={mahasiswa.nim} />
  </div>
}


//function utaman di file ini 
function App(){
  return (
    <div>
      <mhs />
    </div>
  )
}

export default App;