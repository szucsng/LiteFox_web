import NavigationBar from '@/components/Navbar'
import { Button, Card, CardBody, CardHeader, CardContent } from '@nextui-org/react'
import { Users, Shield, Heart, Star, ArrowRight, Play } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen hero-gradient">
      <NavigationBar />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 hero-gradient border-b border-primary-300">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-24 h-24 logo-container rounded-full flex items-center justify-center mx-auto mb-6 overflow-hidden bounce-in">
              <Image src="/favicon.ico" alt="LF Logo" width={80} height={80} />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold hero-title-gradient mb-6">
              LiteFox RP
            </h1>
            <p className="text-xl md:text-2xl text-primary-800 mb-8 max-w-3xl mx-auto">
              Csatlakozz a legjobb roleplay közösséghez! Élvezd a valósághű játékélményt és építsd fel saját történetedet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as={Link}
                href="/join"
                size="lg"
                className="btn-primary-gradient px-8 py-3 text-lg rounded-lg shadow-md hover:scale-105 transition"
              >
                Csatlakozás Most
              </Button>
              <Button
                as={Link}
                href="/about"
                size="lg"
                variant="bordered"
                className="border-2 border-secondary-300 text-secondary-300 bg-white px-8 py-3 text-lg rounded-lg hover:bg-secondary-50 hover:border-secondary-400 hover:text-secondary-400 transition"
              >
                Tudj meg többet
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-primary-50 border-b border-primary-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary-800">
            Miért a LiteFox RP?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 card-hover border border-secondary-300 rounded-xl">
              <CardBody className="text-center">
                <div className="w-16 h-16 bg-secondary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-secondary-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary-800">Aktív Közösség</h3>
                <p className="text-primary-700">
                  Csatlakozz több száz aktív játékoshoz, akik mindennap építik a szerver közösségét.
                </p>
              </CardBody>
            </Card>
            <Card className="p-6 card-hover border border-secondary-300 rounded-xl">
              <CardBody className="text-center">
                <div className="w-16 h-16 bg-secondary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-secondary-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary-800">Biztonságos Környezet</h3>
                <p className="text-primary-700">
                  Professzionális admin csapat biztosítja a biztonságos és fair játékélményt.
                </p>
              </CardBody>
            </Card>
            <Card className="p-6 card-hover border border-secondary-300 rounded-xl">
              <CardBody className="text-center">
                <div className="w-16 h-16 bg-secondary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-secondary-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary-800">Valósághű RP</h3>
                <p className="text-primary-700">
                  Részletes rendszerek és valósághű roleplay mechanikák várnak rád.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 section-gradient">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-primary-light">Aktív Játékos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-primary-light">Online Szerver</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-primary-light">Egyedi Funkció</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5.0</div>
              <div className="text-primary-light">Felhasználói Értékelés</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-black-re">
            Készen állsz a kalandra?
          </h2>
          <p className="text-xl text-black-re mb-8">
            Csatlakozz most és kezdj el építeni saját történetedet a LiteFox RP szerveren!
          </p>
          <Button 
            as={Link}
            href="/join"
            size="lg"
            color="primary"
            className="btn-primary-gradient text-lg px-8"
            endContent={<Play className="w-5 h-5" />}
          >
            Csatlakozás Most
          </Button>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="text-6xl mb-4">💎</div>
            <h2 className="text-4xl font-bold mb-6 text-black-re">
              Támogasd a Szervert
            </h2>
            <p className="text-xl text-black-re mb-8">
              Különleges csomagok és VIP rangok várnak rád! Támogatásoddal fejleszthetjük a szervert.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl mb-4">🎮</div>
              <h3 className="text-xl font-semibold mb-2">Különleges Tárgyak</h3>
              <p className="text-black-re">Exkluzív tárgyak és képességek</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl mb-4">👑</div>
              <h3 className="text-xl font-semibold mb-2">VIP Rangok</h3>
              <p className="text-black-re">Exkluzív előnyök és rangok</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">Szerver Fejlesztés</h3>
              <p className="text-black-re">Új funkciók és fejlesztések</p>
            </div>
          </div>
          <Button 
            as={Link}
            href="/support"
            size="lg"
            color="warning"
            className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:from-yellow-600 hover:to-orange-600 text-lg px-8"
            endContent={<Star className="w-5 h-5" />}
          >
            Támogatás Most
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">LiteFox RP</h3>
              <p className="text-gray-300">
                A legjobb roleplay élmény Magyarországon.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Gyors Linkek</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-300 hover:text-white">Rólunk</Link></li>
                <li><Link href="/rules" className="text-gray-300 hover:text-white">Szabályok</Link></li>
                <li><Link href="/admins" className="text-gray-300 hover:text-white">Adminok</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Közösség</h4>
              <ul className="space-y-2">
                <li><Link href="/discord" className="text-gray-300 hover:text-white">Discord</Link></li>
                <li><Link href="/forum" className="text-gray-300 hover:text-white">Fórum</Link></li>
                <li><Link href="/support" className="text-gray-300 hover:text-white">Támogatás</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kapcsolat</h4>
              <ul className="space-y-2">
                <li><Link href="/contact" className="text-gray-300 hover:text-white">Kapcsolat</Link></li>
                <li><Link href="/privacy" className="text-gray-300 hover:text-white">Adatvédelem</Link></li>
                <li><Link href="/terms" className="text-gray-300 hover:text-white">Feltételek</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 LiteFox RP. Minden jog fenntartva.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 