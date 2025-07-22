import NavigationBar from '@/components/Navbar'
import { Card, CardBody, Chip } from '@nextui-org/react'
import { AlertTriangle, Shield, Users, Heart, Clock, Ban } from 'lucide-react'

const rules = [
  {
    id: 1,
    title: "Általános Szabályok",
    icon: Shield,
    color: "primary",
    rules: [
      "Minden játékos köteles betartani a szerver szabályait.",
      "Tisztelni kell a többi játékost és az adminokat.",
      "Nem engedélyezett a toxikus viselkedés és a bullying.",
      "A szerveren való játék során mindig roleplay módban kell lenni.",
      "Nem engedélyezett a meta gaming (OOC információk használata IC szituációkban)."
    ]
  },
  {
    id: 2,
    title: "Chat Szabályok",
    icon: Users,
    color: "secondary",
    rules: [
      "A chat használatakor mindig tisztelettudóan kell viselkedni.",
      "Nem engedélyezett a spam, a trollkodás és a reklám.",
      "A privát üzeneteket csak akkor küldjük, ha szükséges.",
      "Nem engedélyezett a káromkodás és a sértő megjegyzések.",
      "A chat nyelvét magyarra kell állítani."
    ]
  },
  {
    id: 3,
    title: "Roleplay Szabályok",
    icon: Heart,
    color: "success",
    rules: [
      "Minden interakció roleplay alapú kell legyen.",
      "A karaktered történetét és személyiségét következetesen kell alakítani.",
      "Nem engedélyezett a power gaming (túlzott képességek használata).",
      "A deathmatch (DM) szigorúan tilos.",
      "A karaktered halálakor új karakterrel kell kezdeni."
    ]
  },
  {
    id: 4,
    title: "Játék Mechanikák",
    icon: Clock,
    color: "warning",
    rules: [
      "A szerver egyedi rendszereit megfelelően kell használni.",
      "A glitch-ek és bug-ok kihasználása tilos.",
      "Nem engedélyezett a duplikálás és a cheating.",
      "A szerveren való játék során mindig a legfrissebb verziót kell használni.",
      "A szerver restart-jai után türelmesen kell várni a csatlakozásra."
    ]
  },
  {
    id: 5,
    title: "Admin Szabályok",
    icon: AlertTriangle,
    color: "danger",
    rules: [
      "Az adminok döntései véglegesek és vitathatatlanok.",
      "Az adminokkal való vitatkozás és sértés tilos.",
      "Az adminok parancsait azonnal végre kell hajtani.",
      "Az adminok munkáját nem szabad megzavarni.",
      "Az adminokkal való kapcsolatba lépés előtt gondoljuk át a kérdésünket."
    ]
  },
  {
    id: 6,
    title: "Tiltott Tevékenységek",
    icon: Ban,
    color: "danger",
    rules: [
      "Hack, cheat és mod használata szigorúan tilos.",
      "Nem engedélyezett a szerver reklámozása más szervereken.",
      "A szerveren való játék során nem engedélyezett a más szerverek reklámozása.",
      "Nem engedélyezett a szerveren való játék során való streaming.",
      "A szerveren való játék során nem engedélyezett a valós élet reklámozása."
    ]
  }
]

const getColor = (color: string) => {
  switch (color) {
    case "primary":
      return "primary"
    case "secondary":
      return "secondary"
    case "success":
      return "success"
    case "warning":
      return "warning"
    case "danger":
      return "danger"
    default:
      return "default"
  }
}

export default function RulesPage() {
  return (
    <div className="min-h-screen hero-gradient">
      <NavigationBar />
      
      {/* Hero Section */}
      <section className="py-20 px-4 hero-gradient border-b border-primary-300">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold hero-title-gradient mb-6">
            Szerver Szabályok
          </h1>
          <p className="text-xl text-primary-800 mb-8 max-w-3xl mx-auto">
            A LiteFox RP szerver szabályait minden játékos köteles betartani. A szabályok betartása biztosítja a fair és élvezetes játékélményt mindenki számára.
          </p>
          
          {/* Important Notice */}
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500">
            <CardBody className="p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-black-800 mb-2">
                    Fontos Figyelmeztetés
                  </h3>
                  <p className="text-black-700">
                    A szabályok megsértése esetén az adminok figyelmeztetést adhatnak, ideiglenes vagy 
                    végleges kitiltást alkalmazhatnak. A szabályok nem ismerete nem mentesít a betartásuk alól.
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* Rules Section */}
      <section className="py-20 px-4 bg-primary-50 border-b border-primary-300">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {rules.map((rule) => {
              const IconComponent = rule.icon
              return (
                <Card key={rule.id} className="card-hover border border-secondary-300 rounded-xl">
                  <CardBody className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-secondary-50 rounded-full flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-secondary-300" />
                      </div>
                      <h3 className="text-xl font-semibold text-primary-800">{rule.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {rule.rules.map((ruleText, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-secondary-300 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-primary-700">{ruleText}</span>
                        </li>
                      ))}
                    </ul>
                  </CardBody>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Punishment System */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-black-800">
            Büntetési Rendszer
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardBody className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Figyelmeztetés</h3>
                <p className="text-black-600 mb-4">
                  Első szabálysértés esetén figyelmeztetést kapsz. Ez egy baráti emlékeztető a szabályok betartására.
                </p>
                <Chip color="warning" variant="flat">1. Figyelmeztetés</Chip>
              </CardBody>
            </Card>

            <Card className="p-6">
              <CardBody className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Ideiglenes Kitiltás</h3>
                <p className="text-black-600 mb-4">
                  Ismételt szabálysértés esetén ideiglenes kitiltást kapsz. Az időtartam a súlyosságtól függ.
                </p>
                <Chip color="warning" variant="flat">1-7 nap</Chip>
              </CardBody>
            </Card>

            <Card className="p-6">
              <CardBody className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Ban className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Végleges Kitiltás</h3>
                <p className="text-black-600 mb-4">
                  Súlyos vagy ismételt szabálysértések esetén végleges kitiltást kapsz a szerverről.
                </p>
                <Chip color="danger" variant="flat">Végleges</Chip>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Appeal Process */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-black-800">
            Fellebbezési Folyamat
          </h2>
          <Card className="p-8">
            <CardBody>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-black-800">
                    Hogyan fellebbezhetsz?
                  </h3>
                  <p className="text-black-600 mb-4">
                    Ha úgy gondolod, hogy tévesen kaptál büntetést, fellebbezést tehetsz. 
                    A fellebbezési folyamat a következő lépéseket tartalmazza:
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-black-800">Kapcsolatba lépés</h4>
                        <p className="text-black-600 text-sm">
                          Kapcsolatba lépj velünk emailben vagy Discord-on.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-black-800">Indoklás</h4>
                        <p className="text-black-600 text-sm">
                          Magyarázd el részletesen, miért gondolod, hogy téves a büntetés.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-black-800">Áttekintés</h4>
                        <p className="text-black-600 text-sm">
                          Admin csapatunk áttekinti az esetet és a bizonyítékokat.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold text-black-800">Döntés</h4>
                        <p className="text-black-600 text-sm">
                          Döntést hozunk és értesítünk téged az eredményről.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-primary-50 p-4 rounded-lg">
                  <p className="text-primary-800 text-sm">
                    <strong>Fontos:</strong> A fellebbezési folyamat során mindig tisztelettudóan kell viselkedni. 
                    Az adminokkal való vitatkozás vagy sértés további büntetést vonhat maga után.
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 section-gradient">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Kérdéseid vannak?
          </h2>
          <p className="text-xl mb-8 text-primary-light">
            Ha bármilyen kérdésed van a szabályokkal kapcsolatban, ne habozz kapcsolatba lépni velünk!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="btn-secondary px-8 py-3 rounded-lg font-semibold"
            >
              Kapcsolat
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