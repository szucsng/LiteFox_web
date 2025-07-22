'use client';

import NavigationBar from '@/components/Navbar'
import { Button, Card, CardBody } from '@nextui-org/react'
import { Star, Crown, Gift, Heart, Shield, Users, Zap } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function SupportPage() {
  return (
    <div className="min-h-screen hero-gradient">
      <NavigationBar />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 hero-gradient border-b border-primary-300">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-24 h-24 logo-container rounded-full flex items-center justify-center mx-auto mb-6 overflow-hidden bounce-in">
              <Star className="w-12 h-12 text-secondary-300" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold hero-title-gradient mb-6">
              Támogatás
            </h1>
            <p className="text-xl md:text-2xl text-primary-800 mb-8 max-w-3xl mx-auto">
              Támogasd a LiteFox RP szervert és kapj különleges előnyöket! Különleges csomagok és VIP rangok várnak rád.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as={Link}
                href="https://litefox-rp.tebex.io/"
                size="lg"
                className="btn-primary-gradient px-8 py-3 text-lg rounded-lg shadow-md hover:scale-105 transition"
              >
                Támogatás Most
              </Button>
              <Button
                as={Link}
                href="/about"
                size="lg"
                variant="bordered"
                className="border-2 border-secondary-300 text-secondary-300 bg-white px-8 py-3 text-lg rounded-lg hover:bg-secondary-50 hover:border-secondary-400 hover:text-secondary-400 transition"
              >
                Rólunk
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-primary-50 border-b border-primary-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary-800">
            Miért érdemes támogatni?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 card-hover border border-secondary-300 rounded-xl">
              <CardBody className="text-center">
                <div className="w-16 h-16 bg-secondary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-8 h-8 text-secondary-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary-800">VIP Rangok</h3>
                <p className="text-primary-700">
                  Exkluzív rangok és előnyök a szerveren belül. Különleges jogosultságok és funkciók.
                </p>
              </CardBody>
            </Card>
            <Card className="p-6 card-hover border border-secondary-300 rounded-xl">
              <CardBody className="text-center">
                <div className="w-16 h-16 bg-secondary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-8 h-8 text-secondary-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary-800">Különleges Tárgyak</h3>
                <p className="text-primary-700">
                  Exkluzív tárgyak, képességek és egyedi játékélmények, amelyeket csak támogatók kaphatnak.
                </p>
              </CardBody>
            </Card>
            <Card className="p-6 card-hover border border-secondary-300 rounded-xl">
              <CardBody className="text-center">
                <div className="w-16 h-16 bg-secondary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-secondary-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary-800">Szerver Fejlesztés</h3>
                <p className="text-primary-700">
                  Támogatásoddal fejleszthetjük a szervert és új funkciókat adhatunk hozzá minden játékosnak.
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
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-primary-light">Támogató</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-primary-light">Különleges Csomag</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-primary-light">Támogatás</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5.0</div>
              <div className="text-primary-light">Felhasználói Értékelés</div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-black">
            Népszerű Csomagok
          </h2>
          
          {/* Faction Packs */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-black">Frakció Csomagok</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 card-hover border-2 border-primary-200">
                <CardBody className="text-center">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 h-32 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-white text-lg font-bold">KEZDŐ FRAKCIÓ CSOMAG</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-primary-600">Kezdő frakció csomag</h3>
                  <p className="text-gray-600 mb-4">
                    Alapvető frakció csomag új játékosoknak
                  </p>
                  <div className="text-2xl font-bold text-primary-600 mb-4">€12.69</div>
                  <Button 
                    as={Link}
                    href="https://litefox-rp.tebex.io/"
                    color="primary"
                    className="btn-primary-gradient w-full"
                  >
                    Add to Basket
                  </Button>
                </CardBody>
              </Card>

              <Card className="p-6 card-hover border-2 border-accent-200 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  NÉPSZERŰ
                </div>
                <CardBody className="text-center">
                  <div className="bg-gradient-to-br from-yellow-500 to-orange-600 h-32 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-white text-lg font-bold">PRÉMIUM FRAKCIÓ CSOMAG</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-accent-600">Prémium frakció csomag</h3>
                  <p className="text-gray-600 mb-4">
                    Középszintű frakció csomag fejlett játékosoknak
                  </p>
                  <div className="text-2xl font-bold text-accent-600 mb-4">€19.04</div>
                  <Button 
                    as={Link}
                    href="https://litefox-rp.tebex.io/"
                    color="warning"
                    className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:from-yellow-600 hover:to-orange-600 w-full"
                  >
                    Add to Basket
                  </Button>
                </CardBody>
              </Card>

              <Card className="p-6 card-hover border-2 border-secondary-200">
                <CardBody className="text-center">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-600 h-32 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-white text-lg font-bold">EGYEDI FRAKCIÓ CSOMAG</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-secondary-600">Egyedi frakció csomag</h3>
                  <p className="text-gray-600 mb-4">
                    Legmagasabb szintű frakció csomag professzionális játékosoknak
                  </p>
                  <div className="text-2xl font-bold text-secondary-600 mb-4">€38.09</div>
                  <Button 
                    as={Link}
                    href="https://litefox-rp.tebex.io/"
                    color="secondary"
                    className="w-full"
                  >
                    Add to Basket
                  </Button>
                </CardBody>
              </Card>
            </div>
          </div>

          {/* Vehicle Packs */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-black">Autó Csomagok</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 card-hover border-2 border-blue-200">
                <CardBody className="text-center">
                  <div className="bg-gradient-to-br from-blue-400 to-blue-600 h-32 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-white text-lg font-bold">PRÉMIUM AUTÓ</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-blue-600">Prémium autó</h3>
                  <p className="text-gray-600 mb-4">
                    Kiváló minőségű jármű a szerveren
                  </p>
                  <div className="text-2xl font-bold text-blue-600 mb-4">€25.39</div>
                  <Button 
                    as={Link}
                    href="https://litefox-rp.tebex.io/"
                    color="primary"
                    className="btn-primary-gradient w-full"
                  >
                    Add to Basket
                  </Button>
                </CardBody>
              </Card>

              <Card className="p-6 card-hover border-2 border-gray-200">
                <CardBody className="text-center">
                  <div className="bg-gradient-to-br from-gray-400 to-gray-600 h-32 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-white text-lg font-bold">LIMITÁLT AUTÓ</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-600">Limitált autó</h3>
                  <p className="text-gray-600 mb-4">
                    Különleges, limitált kiadású jármű
                  </p>
                  <div className="text-2xl font-bold text-gray-600 mb-4">€25.39</div>
                  <Button 
                    as={Link}
                    href="https://litefox-rp.tebex.io/"
                    color="primary"
                    className="btn-primary-gradient w-full"
                  >
                    Add to Basket
                  </Button>
                </CardBody>
              </Card>

              <Card className="p-6 card-hover border-2 border-white-200">
                <CardBody className="text-center">
                  <div className="bg-gradient-to-br from-white-400 to-white-600 h-32 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-white text-lg font-bold">EGYEDI AUTÓ</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-600">Egyedi autó</h3>
                  <p className="text-gray-600 mb-4">
                    Teljesen egyedi, személyre szabott jármű
                  </p>
                  <div className="text-2xl font-bold text-gray-600 mb-4">€38.09</div>
                  <Button 
                    as={Link}
                    href="https://litefox-rp.tebex.io/"
                    color="primary"
                    className="btn-primary-gradient w-full"
                  >
                    Add to Basket
                  </Button>
                </CardBody>
              </Card>
            </div>
          </div>

          {/* Other Items */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8 text-black">Egyéb Tárgyak</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 card-hover border-2 border-green-200">
                <CardBody className="text-center">
                  <div className="bg-gradient-to-br from-green-400 to-green-600 h-32 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-white text-lg font-bold">SAJÁT BOLT</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-green-600">Saját bolt</h3>
                  <p className="text-gray-600 mb-4">
                    Saját bolt tulajdonjog a szerveren
                  </p>
                  <div className="text-2xl font-bold text-green-600 mb-4">€25.39</div>
                  <Button 
                    as={Link}
                    href="https://litefox-rp.tebex.io/"
                    color="success"
                    className="w-full"
                  >
                    Add to Basket
                  </Button>
                </CardBody>
              </Card>

              <Card className="p-6 card-hover border-2 border-purple-200">
                <CardBody className="text-center">
                  <div className="bg-gradient-to-br from-purple-400 to-purple-600 h-32 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-white text-lg font-bold">EGYEDI PED</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-purple-600">Egyedi ped</h3>
                  <p className="text-gray-600 mb-4">
                    Különleges, egyedi játékos karakter
                  </p>
                  <div className="text-2xl font-bold text-purple-600 mb-4">€19.04</div>
                  <Button 
                    as={Link}
                    href="https://litefox-rp.tebex.io/"
                    color="secondary"
                    className="w-full"
                  >
                    Add to Basket
                  </Button>
                </CardBody>
              </Card>

              <Card className="p-6 card-hover border-2 border-pink-200">
                <CardBody className="text-center">
                  <div className="bg-gradient-to-br from-pink-400 to-pink-600 h-32 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-white text-lg font-bold">EGYEDI RUHA</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-pink-600">Egyedi ruha</h3>
                  <p className="text-gray-600 mb-4">
                    Különleges, egyedi karakter ruha
                  </p>
                  <div className="text-2xl font-bold text-pink-600 mb-4">€25.39</div>
                  <Button 
                    as={Link}
                    href="https://litefox-rp.tebex.io/"
                    color="secondary"
                    className="w-full"
                  >
                    Add to Basket
                  </Button>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-black">
            Támogatás Előnyei
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Támogatásoddal nem csak te nyersz, hanem az egész közösség!
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-2xl font-bold mb-4 text-primary-600">Játékélmény</h3>
              <ul className="text-left text-gray-600 space-y-2">
                <li>✅ Különleges tárgyak és képességek</li>
                <li>✅ Exkluzív parancsok és funkciók</li>
                <li>✅ VIP rangok és előnyök</li>
                <li>✅ Különleges effektek és animációk</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4 text-accent-600">Szerver Fejlesztés</h3>
              <ul className="text-left text-gray-600 space-y-2">
                <li>✅ Új funkciók és rendszerek</li>
                <li>✅ Szerver infrastruktúra fejlesztés</li>
                <li>✅ Admin csapat támogatása</li>
                <li>✅ Közösség fejlesztése</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-black">
            Készen állsz a támogatásra?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Csatlakozz a támogatók közé és élvezd az exkluzív előnyöket!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              as={Link}
              href="https://litefox-rp.tebex.io/"
              size="lg"
              color="warning"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:from-yellow-600 hover:to-orange-600 text-lg px-8"
              endContent={<Gift className="w-5 h-5" />}
            >
              Tebex Bolt Megnyitása
            </Button>
            <Button 
              as={Link}
              href="/contact"
              size="lg"
              variant="bordered"
              className="btn-ghost"
              endContent={<Heart className="w-5 h-5" />}
            >
              Kapcsolat
            </Button>
          </div>
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
  );
} 