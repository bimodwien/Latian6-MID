const dataPeminjam = [
    {
        'nama' : 'Obi',
        'usia' : 18,
        'pekerjaan' : 'tidak tetap',
        'gajiTerakhir' : 2000000
    },
    {
        'nama' : 'Wawan',
        'usia' : 28,
        'pekerjaan' : 'tetap',
        'gajiTerakhir' : 800000
    },
    {
        'nama' : 'Bejo',
        'usia' : 9,
        'pekerjaan' : ' tidak tetap',
        'gajiTerakhir' : 10000
    },
    {
        'nama' : 'Usmar',
        'usia' : 23,
        'pekerjaan' : 'tetap',
        'gajiTerakhir' : 5000000
    },
    {
        'nama' : 'Bowo',
        'usia' : 10,
        'pekerjaan' : 'tetap',
        'gajiTerakhir' : 400000
    }
]

let totalBiaya = 0

for (let i = 0 ; i < dataPeminjam.length ; i ++) {
    const korban = dataPeminjam[i]
    let gaji = 0
    if (korban.usia >= 18) {
        if (korban.pekerjaan === 'tetap') {
            gaji = korban.gajiTerakhir * 2.5
        }
        else {
            gaji = korban.gajiTerakhir * 1.5
        }
        totalBiaya += gaji
    }
}
console.log(`Total biaya yang harus dikeluarkan adalah ${totalBiaya}`);