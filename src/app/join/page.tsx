import NavigationBar from '@/components/Navbar'
import { Card, CardBody, Button, Chip } from '@nextui-org/react'
import { Download, Play, Users, Shield, Heart, Star, ArrowRight, CheckCircle, AlertTriangle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const requirements = [
  {
    title: "FiveM Kliens",
    description: "Telepítsd a FiveM klienset a hivatalos weboldalról",
    icon: Download,
    link: "https://fivem.net/",
    required: true
  },
  {
    title: "GTA V",
    description: "Szükséged van egy érvényes GTA V példányra",
    icon: Play,
    link: "https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/",
    required: true
  },
  {
    title: "Stabil Internet",
    description: "Minimum 10 Mbps letöltési sebesség ajánlott",
    icon: Shield,
    required: true
  },
  {
    title: "Discord Fiók",
    description: "Csatlakozz Discord szerverünkhöz a kommunikációhoz",
    icon: Users,
    link: "https://discord.gg/litefoxrp",
    required: false
  }
]

const steps = [
  {
    number: 1,
    title: "FiveM Telepítése",
    description: "Töltsd le és telepítsd a FiveM klienset a hivatalos weboldalról.",
    icon: Download
  },
  {
    number: 2,
    title: "Szerver Csatlakozás",
    description: "Indítsd el a FiveM-et és csatlakozz a szerverünkhöz.",
    icon: Play
  },
  {
    number: 3,
    title: "Karakter Létrehozás",
    description: "Hozd létre karaktered és kezdj el játszani!",
    icon: Users
  },
  {
    number: 4,
    title: "Közösség Csatlakozás",
    description: "Csatlakozz Discord szerverünkhöz és ismerd meg a közösséget.",
    icon: Heart
  }
]

export default function JoinPage() {
  return (
    <div className="min-h-screen hero-gradient">
      <NavigationBar />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold hero-title-gradient mb-6">
            Csatlakozás
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Kövesd ezt az egyszerű útmutatót és csatlakozz a LiteFox RP közösséghez! 
            Minden lépés részletesen el van magyarázva.
          </p>
          
          {/* Server Info */}
          <Card className="max-w-2xl mx-auto section-gradient text-white">
            <CardBody className="p-6">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden">
                  <Image src="/favicon.ico" alt="LF Logo" width={44} height={44} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">LiteFox RP</h3>
                  <p className="text-primary-light">Magyar Roleplay Szerver</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">litefoxrp.hu</div>
                  <div className="text-primary-light text-sm">Szerver IP</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-primary-light text-sm">Aktív Játékos</div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Szükséges Feltételek
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {requirements.map((req, index) => {
              const IconComponent = req.icon
              return (
                <Card key={index} className="card-hover">
                  <CardBody className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 icon-container-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-semibold text-gray-800">{req.title}</h3>
                          {req.required && (
                            <Chip color="danger" size="sm" variant="flat">Kötelező</Chip>
                          )}
                        </div>
                        <p className="text-gray-600 mb-3">{req.description}</p>
                        {req.link && (
                          <a 
                            href={req.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-primary font-medium inline-flex items-center gap-1"
                          >
                            Letöltés <ArrowRight className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </CardBody>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Csatlakozás Lépései
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <Card key={index} className="card-hover">
                  <CardBody className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 logo-container rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                        {step.number}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Detailed Instructions */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Részletes Útmutató
          </h2>
          
          <div className="space-y-8">
            <Card className="p-6">
              <CardBody>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">1. FiveM Telepítése</h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    <strong>Lépés 1:</strong> Látogass meg a <a href="https://fivem.net/" target="_blank" rel="noopener noreferrer" className="link-primary">FiveM hivatalos weboldalát</a>.
                  </p>
                  <p>
                    <strong>Lépés 2:</strong> Kattints a "Download" gombra és töltsd le a FiveM klienset.
                  </p>
                  <p>
                    <strong>Lépés 3:</strong> Futtasd a letöltött telepítőt és kövesd az utasításokat.
                  </p>
                  <p>
                    <strong>Lépés 4:</strong> Indítsd el a FiveM-et és várj, amíg betölti a GTA V-t.
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card className="p-6">
              <CardBody>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">2. Szerver Csatlakozás</h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    <strong>Lépés 1:</strong> A FiveM-ben kattints a "Connect" gombra.
                  </p>
                  <p>
                    <strong>Lépés 2:</strong> Írd be a szerver IP címét: <code className="bg-gray-100 px-2 py-1 rounded">litefoxrp.hu</code>
                  </p>
                  <p>
                    <strong>Lépés 3:</strong> Kattints a "Connect" gombra és várj, amíg betölti a szervert.
                  </p>
                  <p>
                    <strong>Lépés 4:</strong> Ha először csatlakozol, a szerver automatikusan letölti a szükséges fájlokat.
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card className="p-6">
              <CardBody>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">3. Karakter Létrehozás</h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    <strong>Lépés 1:</strong> A szerveren belül találkozz egy adminnal vagy használd a /help parancsot.
                  </p>
                  <p>
                    <strong>Lépés 2:</strong> Kövesd az utasításokat a karaktered létrehozásához.
                  </p>
                  <p>
                    <strong>Lépés 3:</strong> Válassz egy nevet és egy munkát a karakterednek.
                  </p>
                  <p>
                    <strong>Lépés 4:</strong> Olvasd el a szabályokat és kezdj el játszani!
                  </p>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Hasznos Tippek
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardBody>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-8 h-8 text-secondary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Új Játékosoknak</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Olvasd el a szabályokat alaposan</li>
                      <li>• Kérj segítséget az adminoktól</li>
                      <li>• Csatlakozz Discord szerverünkhöz</li>
                      <li>• Legyél türelmes és tanulj</li>
                    </ul>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card className="p-6">
              <CardBody>
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Problémák Megoldása</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Ha nem tölt be, próbáld újraindítani a FiveM-et</li>
                      <li>• Ellenőrizd az internet kapcsolatod</li>
                      <li>• Frissítsd a grafikus drivert</li>
                      <li>• Kapcsolatba lépj velünk Discord-on</li>
                    </ul>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 section-gradient">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Készen állsz csatlakozni?
          </h2>
          <p className="text-xl mb-8 text-primary-light">
            Kövesd az útmutatót és csatlakozz a LiteFox RP közösséghez!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://fivem.net/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary px-8 py-3 rounded-lg font-semibold"
            >
              FiveM Letöltés
            </a>
            <a 
              href="https://discord.gg/litefoxrp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-ghost border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-semibold"
            >
              Discord Szerver
            </a>
          </div>
        </div>
      </section>
    </div>
  )
} 