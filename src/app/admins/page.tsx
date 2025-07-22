import NavigationBar from '@/components/Navbar'
import { Card, CardBody, CardHeader, Avatar, Badge, Chip } from '@nextui-org/react'
import { Crown, Shield, Star, Users, Clock, Award } from 'lucide-react'
import Image from 'next/image'

interface Admin {
  id: number
  name: string
  role: string
  avatar: string
  profileImage?: string
  description: string
  badges?: string[]
  specialty?: string
  joinDate?: string
}

const admins: Admin[] = [
  {
    id: 1,
    name: "PBence",
    role: "Tulajdonos",
    avatar: "/lficon/lftulaj.png",
    profileImage: "/profilkep/pbence.gif",
    description: "A szerver alapítója és fő adminisztrátora. 5+ év tapasztalattal rendelkezik roleplay szerverekben.",
  },
  {
    id: 2,
    name: "CJ smd",
    role: "Tulajdonos",
    avatar: "/lficon/lftulaj.png",
    profileImage: "/profilkep/cjsmd.png",
    description: "Tapasztalt admin, aki a játékosok biztonságáért és a fair játékért felelős.",
  },
  {
    id: 3,
    name: "Ricsi",
    role: "Server Manager",
    avatar: "/lficon/lfservermanager.png",
    profileImage: "/profilkep/ricsi.png",
    description: "A szerver technikai működéséért és fejlesztéséért felelős szakember.",
  },
  {
    id: 4,
    name: "Nike",
    role: "Admin Controller",
    avatar: "/lficon/lfadmincontroller.png",
    profileImage: "/profilkep/nike.png",
    description: "Csókolom, szia NIKE vagyok Aktív és nem mellesleg cigány, OOC boxolok Ic is varom a nondogoket szertettel bárkit le beefilek😘 . Segítőkész vagyok bárkit ki kell ütni szóljatok reportra ugrok és keresetek bizalommal bármivel kapcsolatban by: Győri Fene Gyerek😝",
  },
  {
    id: 5,
    name: "Arnold",
    role: "Community Manager",
    avatar: "/lficon/lfcomonitymanager.png",
    profileImage: "/profilkep/arnold.jfif",
    description: "Helper pozícióban segít a játékosoknak és tanulja a moderátori feladatokat.",
  },
  {
    id: 6,
    name: "Dusi",
    role: "Community Manager",
    avatar: "/lficon/lfcomonitymanager.png",
    profileImage: "/profilkep/dusi.png",
    description: "Helper pozícióban segít a játékosoknak és tanulja a moderátori feladatokat.",
  },
  {
    id: 7,
    name: "Bátor",
    role: "Community Manager",
    avatar: "/lficon/lfcomonitymanager.png",
    profileImage: "/profilkep/bator.jfif",
    description: "",
  },
  {
    id: 8,
    name: "Nobody",
    role: "SuperAdmin",
    avatar: "/lficon/lfsuperadmin.png",
    profileImage: "/profilkep/nobody.jfif",
    description: "A közösség építéséért és a játékosok élményéért felelős szakember.",
  },
  {
    id: 9,
    name: "Szűcs",
    role: "Főadmin",
    avatar: "/lficon/lffoadmin.png",  
    profileImage: "/profilkep/szucs.png",
    description: "Tengermély tisztelet, Szűcs vagyok, Miskolci fenevad",
  },
  {
    id: 10,
    name: "Papp Gergely",
    role: "Próbaidős Admin",
    avatar: "/lficon/lfprobaidosadmin.png",
    profileImage: "/profilkep/pappgergely.png",
    description: "Mi a bibi habibi? Papp gergely vagyok, 185 cm-s daráló vakond. 0-24 elérhetö vagyok. Ha valami gondotok lenne a játékba - / report és repulok mint légy a rántot husra.",
  },
  {
    id: 11,
    name: "Mozso",
    role: "Próbaidős Admin",
    avatar: "/lficon/lfprobaidosadmin.png",
    profileImage: "/profilkep/mozso.png",
    description: "Szoj kodó Helyzetó. a nevem mozso, a szalonna cafatoló spártai. a reportokra fehér lovammal száguldok ki aranyszínű páncélommal ( másnéven admin taggel) a nonosokat agyon ütöm. a moddereket tarkón verem. fegyverem a /comserv. fasza gyerek vagyok. irj ram ha akarsz kb. mindig válaszolok. Ha baj van szólj aztán adok rá gyógypuszit. na satarava muroplán én elmentem kocsikázni.",
  },
  {
    id: 12,
    name: "Krí$Tof_1070",
    role: "Próbaidős Admin",
    avatar: "/lficon/lfprobaidosadmin.png",
    profileImage: "/profilkep/sd.jpg",
    description: "Szevasztok, én vagyok a falusi huligán motoros anyám szerint csak egyszer estem nagyot, azóta ilyen vagyok! Reportokra 90km/h-val száguldok, de lehet nem érek oda időben.",
  }
]

const getRoleColor = (role: string) => {
  switch (role) {
    case "Tulajdonos":
      return "danger"
    case "SuperAdmin":
      return "danger"
    case "Főadmin":
      return "warning"
    case "Admin Controller":
      return "primary"
    case "Server Manager":
      return "primary"
    case "Developer":
      return "primary"
    case "Community Manager":
      return "secondary"
    case "Admin Segéd":
      return "success"
    case "Próbaidős Admin":
      return "success"
    default:
      return "default"
  }
}

const getRoleTextColor = (role: string) => {
  switch (role) {
    case "Tulajdonos":
      return "text-blue-500"
    case "SuperAdmin":
      return "text-yellow-600"
    case "Főadmin":
      return "text-green-600"
    case "Admin Controller":
      return "text-red-600"
    case "Server Manager":
      return "text-blue-900"
    case "Developer":
      return "text-grey-600"
    case "Community Manager":
      return "text-orange-600"
    case "Admin Segéd":
      return "text-purple-600"
    case "Próbaidős Admin":
      return "text-purple-600"
    default:
      return "text-black-600"
  }
}

export default function AdminsPage() {
  return (
    <div className="min-h-screen hero-gradient">
      <NavigationBar />
      
      {/* Hero Section */}
      <section className="py-20 px-4 hero-gradient border-b border-primary-300">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold hero-title-gradient mb-6">
            Admin Csapatunk
          </h1>
          <p className="text-xl text-primary-800 mb-8 max-w-3xl mx-auto">
            Ismerd meg azokat, akik biztosítják a LiteFox RP szerver zökkenőmentes működését és a játékosok élményét.
          </p>
          
          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-center mb-4">
                <Crown className="w-8 h-8 text-yellow-500" />
              </div>
              <div className="text-3xl font-bold text-gray-800">12</div>
              <div className="text-gray-600">Admin Tag</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-primary-500" />
              </div>
              <div className="text-3xl font-bold text-gray-800">24/7</div>
              <div className="text-gray-600">Elérhetőség</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-secondary-500" />
              </div>
              <div className="text-3xl font-bold text-gray-800">5+</div>
              <div className="text-gray-600">Év Tapasztalat</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-accent-500" />
              </div>
              <div className="text-3xl font-bold text-gray-800">30+</div>
              <div className="text-gray-600">Kiszolgált Játékos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Admin Cards */}
      <section className="py-20 px-4 bg-primary-50 border-b border-primary-300">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {admins.map((admin) => (
              <Card key={admin.id} className="card-hover border border-secondary-300 rounded-xl">
                <CardHeader className="pb-0 pt-6 px-6 flex-col items-start">
                  <div className="flex items-center gap-4 w-full">
                    <Avatar
                      src={admin.profileImage || `https://i.pravatar.cc/150?u=${admin.id}`}
                      size="lg"
                      className="w-16 h-16"
                    />
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-primary-800">{admin.name}</h3>
                      <span className="block text-base text-primary-700 mt-1">{admin.role}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardBody className="px-6 py-4">
                  <div className="flex items-center gap-3 mb-4 p-3 bg-primary-50 rounded-lg border border-primary-200 shadow-sm">
                    <div className="w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center bg-graphite-100 shadow-md border border-primary-200">
                      <Image
                        src={admin.avatar}
                        alt={`${admin.role} ikon`}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-primary-800">Rang:</h4>
                      <p className={`text-sm font-medium ${getRoleTextColor(admin.role)}`}>{admin.role}</p>
                    </div>
                  </div>
                  
                  <p className="text-primary-700 mb-4">
                    {admin.description}
                  </p>
                  
                  {admin.specialty && (
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-sm text-gray-700">Szakterület:</h4>
                      <p className="text-sm text-gray-600">{admin.specialty}</p>
                    </div>
                  )}
                  
                  {admin.badges && admin.badges.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-2 text-sm text-gray-700">Badge-ek:</h4>
                      <div className="flex flex-wrap gap-1">
                        {admin.badges.map((badge, index) => (
                          <Badge 
                            key={index}
                            color="primary" 
                            variant="flat"
                            size="sm"
                          >
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Admin Values */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Admin Értékeink
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
                              <div className="w-16 h-16 icon-container-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary-600" />
                </div>
              <h3 className="text-xl font-semibold mb-2">Biztonság</h3>
              <p className="text-gray-600">
                Minden admin tagunk elkötelezett a szerver és játékosok biztonságáért.
              </p>
            </div>
            
            <div className="text-center">
                              <div className="w-16 h-16 icon-container-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-secondary-600" />
                </div>
              <h3 className="text-xl font-semibold mb-2">Minőség</h3>
              <p className="text-gray-600">
                Magas színvonalú szolgáltatást nyújtunk minden játékos számára.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 icon-container-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Közösség</h3>
              <p className="text-gray-600">
                Együtt építjük a legjobb roleplay közösséget Magyarországon.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 section-gradient">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Kapcsolatba lépés
          </h2>
          <p className="text-xl mb-8 text-primary-light">
            Ha bármilyen kérdésed van vagy segítségre van szükséged, kapcsolatba léphetsz velünk!
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