// Yliluokka Henkilo
class Henkilo {
    constructor(etunimet, sukunimi, kutsumanimi, syntymavuosi) {
        this.etunimet = etunimet;
        this.sukunimi = sukunimi;
        this.kutsumanimi = etunimet.split(" ")[0]; // Ensimmäinen etunimi kutsumanimeksi
        this.syntymavuosi = new Date(syntymavuosi);
    }
}

// Aliluokka Urheilija
class Urheilija extends Henkilo {
    constructor(etunimet, sukunimi, kutsumanimi, syntymavuosi, linkkiKuvaan, omapaino, laji, saavutukset) {
        super(etunimet, sukunimi, kutsumanimi, syntymavuosi);
        this._linkkiKuvaan = linkkiKuvaan;
        this._omapaino = parseInt(omapaino, 10);
        this._laji = laji;
        this._saavutukset = saavutukset;
    }

    // Getterit ja setterit
    get linkkiKuvaan() {
        return this._linkkiKuvaan;
    }

    set linkkiKuvaan(url) {
        this._linkkiKuvaan = url;
    }

    get omapaino() {
        return this._omapaino;
    }

    set omapaino(paino) {
        this._omapaino = parseInt(paino, 10);
    }

    get laji() {
        return this._laji;
    }

    set laji(laji) {
        this._laji = laji;
    }

    get saavutukset() {
        return this._saavutukset;
    }

    set saavutukset(saavutukset) {
        this._saavutukset = saavutukset;
    }
}

// Esimerkit Urheilija-olioista
const urheilija1 = new Urheilija(
    "Juha Jussi", "Mieto", "Juha", 1950,
    "https://img/JuhaMieto.jpg", 65, "Hiihto", "Jottaaa"
);

const urheilija2 = new Urheilija(
    "Mika Mikke", "Halvari", "Mikke",  1968,
    "https://img/MikaHalvari.jpg", 70, "Kuulantyöntö", "jotain"
);

// Tulostetaan urheilijat selkeämmällä esityksellä
console.log(`Nimi: ${urheilija1.kutsumanimi}, Sukunimi ${urheilija1.sukunimi}, Laji: ${urheilija1.laji}, Saavutukset: ${urheilija1.saavutukset}`);
console.log(`Nimi: ${urheilija2.kutsumanimi}, Sukunimi ${urheilija2.sukunimi}, Laji: ${urheilija2.laji}, Saavutukset: ${urheilija2.saavutukset}`);
