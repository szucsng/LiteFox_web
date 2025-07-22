import NavigationBar from '@/components/Navbar'
import { Card, CardBody, Button } from '@nextui-org/react'
import { Users, Shield, Heart, Star, ArrowRight, Play, Award, Clock } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="min-h-screen hero-gradient">
      <NavigationBar />
      
      {/* Hero Section */}
      <section className="py-20 px-4 hero-gradient border-b border-primary-300">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold hero-title-gradient mb-6">
            Rólunk
          </h1>
          <p className="text-xl text-primary-800 mb-8 max-w-3xl mx-auto">
            Ismerd meg a LiteFox RP történetét és értékeit. Célunk a legjobb roleplay élmény biztosítása Magyarországon.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 bg-primary-50 border-b border-primary-300">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary-800">
                A LiteFox RP Története
              </h2>
              <div className="space-y-6 text-primary-700">
                <p>
                  A LiteFox RP 2020-ban jött létre egy egyszerű ötletből: létrehozni Magyarország legjobb roleplay szerverét. 
                  Alapítónk, aki már több éve aktív volt a roleplay közösségben, úgy érezte, hogy hiányzik egy olyan szerver, 
                  ahol a minőség és a közösség az első helyen áll.
                </p>
                <p>
                  Az első hónapokban csak néhány lelkes játékossal indultunk, de hamarosan nőtt a közösség. 
                  A szerver folyamatosan fejlődött, új funkciókat kaptunk, és egyre több játékos csatlakozott hozzánk.
                </p>
                <p>
                  Ma már több mint 500 aktív játékosunk van, és a szerver Magyarország egyik legnagyobb roleplay közössége. 
                  Büszkék vagyunk arra, hogy milyen közösséget építettünk ki, és mindig nyitottak vagyunk új tagok felé.
                </p>
              </div>
            </div>
            <div className="section-gradient p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Szerver Statisztikák</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div className="text-primary-light">Aktív Játékos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">4+</div>
                  <div className="text-primary-light">Év Tapasztalat</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">50+</div>
                  <div className="text-primary-light">Egyedi Funkció</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-primary-light">Online Szerver</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary-800">
            Értékeink
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 card-hover border border-secondary-300 rounded-xl">
              <CardBody className="text-center">
                <div className="w-16 h-16 bg-secondary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-secondary-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary-800">Közösség</h3>
                <p className="text-primary-700">
                  A közösség az, ami a LiteFox RP-t különbözővé teszi. Minden játékos fontos számunkra, 
                  és mindent megteszünk azért, hogy mindenki jól érezze magát.
                </p>
              </CardBody>
            </Card>

            <Card className="p-6 card-hover border border-secondary-300 rounded-xl">
              <CardBody className="text-center">
                <div className="w-16 h-16 bg-secondary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-secondary-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary-800">Biztonság</h3>
                <p className="text-primary-700">
                  A játékosok biztonsága és a fair játék az elsődleges prioritásunk. 
                  Professzionális admin csapatunk biztosítja a biztonságos környezetet.
                </p>
              </CardBody>
            </Card>

            <Card className="p-6 card-hover border border-secondary-300 rounded-xl">
              <CardBody className="text-center">
                <div className="w-16 h-16 bg-secondary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-secondary-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary-800">Minőség</h3>
                <p className="text-primary-700">
                  Folyamatosan fejlesztjük a szervert és új funkciókat adunk hozzá. 
                  Célunk a legjobb roleplay élmény biztosítása.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary-800">
            Miért a LiteFox RP?
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 icon-container-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Aktív Közösség</h3>
                  <p className="text-primary-700">
                    Több száz aktív játékos vár rád, akik mindennap építik a szerver közösségét. 
                    Mindig találsz valakit, akivel játszhatsz.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 icon-container-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-accent-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Egyedi Rendszerek</h3>
                  <p className="text-primary-700">
                    Fejlett roleplay rendszerekkel rendelkezünk, amelyek valósághű játékélményt biztosítanak. 
                    Minden rendszer gondosan kidolgozott és tesztelt.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 icon-container-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-secondary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">24/7 Elérhetőség</h3>
                  <p className="text-primary-700">
                    Szerverünk 24/7 elérhető, és admin csapatunk mindig készen áll segíteni. 
                    Bármikor csatlakozhatsz és játszhatsz.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 icon-container-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-secondary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Biztonságos Környezet</h3>
                  <p className="text-primary-700">
                    Professzionális admin csapatunk biztosítja a biztonságos és fair játékélményt. 
                    Minden játékos egyenlő esélyekkel rendelkezik.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 icon-container-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Barátságos Közösség</h3>
                  <p className="text-primary-700">
                    A LiteFox RP közössége barátságos és befogadó. Új játékosokat mindig szívesen látunk, 
                    és segítünk nekik beilleszkedni.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 icon-container-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-secondary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Folyamatos Fejlesztés</h3>
                  <p className="text-primary-700">
                    Folyamatosan fejlesztjük a szervert és új funkciókat adunk hozzá. 
                    Mindig figyelembe vesszük a játékosok visszajelzéseit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary-800">
            Csapatunk
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <CardBody>
                <div className="w-20 h-20 logo-container rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden shadow-lg">
                  <Image src="/favicon.ico" alt="LF Logo" width={72} height={72} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Alapítók</h3>
                <p className="text-primary-700">
                  A szerver alapítói, akik minden nap dolgoznak azon, hogy a LiteFox RP 
                  Magyarország legjobb roleplay szervere legyen.
                </p>
              </CardBody>
            </Card>

            <Card className="p-6 text-center">
              <CardBody>
                <div className="w-20 h-20 logo-container rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Admin Csapat</h3>
                <p className="text-primary-700">
                  Professzionális admin csapatunk, akik biztosítják a szerver zökkenőmentes 
                  működését és a játékosok élményét.
                </p>
              </CardBody>
            </Card>

            <Card className="p-6 text-center">
              <CardBody>
                <div className="w-20 h-20 logo-container rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Közösség</h3>
                <p className="text-primary-700">
                  A LiteFox RP közössége, akik nélkül ez a szerver nem létezne. 
                  Minden játékos fontos számunkra.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 section-gradient">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Csatlakozz hozzánk!
          </h2>
          <p className="text-xl mb-8 text-primary-light">
            Készen állsz, hogy részese legyél a LiteFox RP történetének? 
            Csatlakozz most és építsd fel saját történetedet!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              as={Link}
              href="/join"
              size="lg"
              color="primary"
              className="btn-secondary"
              endContent={<Play className="w-4 h-4" />}
            >
              Csatlakozás Most
            </Button>
            <Button 
              as={Link}
              href="/contact"
              size="lg"
              variant="bordered"
              className="btn-ghost border-white text-white hover:bg-white hover:text-primary-600"
              endContent={<ArrowRight className="w-4 h-4" />}
            >
              Kapcsolat
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 