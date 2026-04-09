import Nama from './nama';
import NIM from './NIM';
function Mhs(){
  const mhs = [
   {
    nama: "Adi Priyo Pangestu",
    nim: "A11.2023.15267"
   },
   {
    nama: "Budi Santoso",
    nim: "A11.2023.15266"
   },
   {
    nama: "Citra Lestari",
    nim: "A11.2023.12563"
   }
  ]

  return (
  <div>
    {mhs.map((mhs, index)=>(
      <div key={index}>
        <Nama nama={mhs.nama} />
        <NIM nim={mhs.nim} />
        <hr />
  </div>
    ))}
  </div>
  )  
}

export default Mhs;