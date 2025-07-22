import NavigationBar from '@/components/Navbar'
import { Card, CardBody, Input, Textarea, Button, Chip } from '@nextui-org/react'
import { Mail, MessageCircle, Phone, MapPin, Clock, Send } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen hero-gradient">
      <NavigationBar />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold hero-title-gradient mb-6">
            Kapcsolat
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Van kérdésed vagy javaslatod? Ne habozz kapcsolatba lépni velünk! Admin csapatunk mindig készen áll segíteni.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <CardBody>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Írj nekünk!</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      label="Keresztnév"
                      placeholder="Az Ön keresztneve"
                      variant="bordered"
                      isRequired
                    />
                    <Input
                      label="Vezetéknév"
                      placeholder="Az Ön vezetékneve"
                      variant="bordered"
                      isRequired
                    />
                  </div>
                  
                  <Input
                    label="Email cím"
                    placeholder="pelda@email.com"
                    variant="bordered"
                    type="email"
                    isRequired
                  />
                  
                  <Input
                    label="Tárgy"
                    placeholder="Miben segíthetünk?"
                    variant="bordered"
                    isRequired
                  />
                  
                  <Textarea
                    label="Üzenet"
                    placeholder="Írja le részletesen kérdését vagy javaslatát..."
                    variant="bordered"
                    minRows={5}
                    isRequired
                  />
                  
                  <Button 
                    type="submit"
                    color="primary"
                    size="lg"
                    className="btn-primary-gradient text-white w-full"
                    endContent={<Send className="w-4 h-4" />}
                  >
                    Üzenet Küldése
                  </Button>
                </form>
              </CardBody>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="p-6">
                <CardBody>
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">Kapcsolat Információk</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                                      <div className="w-12 h-12 icon-container-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Discord Szerver</h4>
                        <p className="text-gray-600 mb-2">Csatlakozz közösségünkhöz!</p>
                        <a 
                          href="https://discord.gg/litefoxrp" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="link-primary font-medium"
                        >
                          discord.gg/litefoxrp
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                                      <div className="w-12 h-12 icon-container-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                        <p className="text-gray-600 mb-2">Hivatalos kapcsolat</p>
                        <a 
                          href="mailto:info@litefoxrp.hu" 
                          className="link-primary font-medium"
                        >
                          info@litefoxrp.hu
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                                      <div className="w-12 h-12 icon-container-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-secondary-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Elérhetőség</h4>
                        <p className="text-gray-600">24/7 támogatás</p>
                        <p className="text-secondary-600 font-medium">Online</p>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>

              {/* Quick Links */}
              <Card className="p-6">
                <CardBody>
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">Gyors Linkek</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-700">Szabályok</span>
                      <a href="/rules" className="link-primary">
                        Megtekintés →
                      </a>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-700">Adminok</span>
                      <a href="/admins" className="link-primary">
                        Megtekintés →
                      </a>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-700">Csatlakozás</span>
                      <a href="/join" className="link-primary">
                        Megtekintés →
                      </a>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Gyakran Ismételt Kérdések
          </h2>
          
          <div className="space-y-6">
            <Card className="p-6">
              <CardBody>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Hogyan csatlakozhatok a szerverhez?
                </h3>
                <p className="text-gray-600">
                  A szerverhez való csatlakozáshoz szükséged van egy FiveM kliensre. 
                  A szerver IP címe: <code className="bg-gray-100 px-2 py-1 rounded">connect litefoxrp.hu</code>
                </p>
              </CardBody>
            </Card>

            <Card className="p-6">
              <CardBody>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Milyen szabályok vonatkoznak a szerveren?
                </h3>
                <p className="text-gray-600">
                  A részletes szabályokat a <a href="/rules" className="link-primary">Szabályok</a> oldalon találod. 
                  Minden játékos köteles betartani ezeket a szabályokat.
                </p>
              </CardBody>
            </Card>

            <Card className="p-6">
              <CardBody>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Hogyan jelentkezhetek admin pozícióra?
                </h3>
                <p className="text-gray-600">
                  Admin pozícióra való jelentkezéshez először aktív tagja kell lenned a közösségnek. 
                  Kapcsolatba léphetsz velünk emailben vagy Discord-on.
                </p>
              </CardBody>
            </Card>

            <Card className="p-6">
              <CardBody>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  Van technikai problémám, mit tegyek?
                </h3>
                <p className="text-gray-600">
                  Technikai problémák esetén először ellenőrizd a <a href="/support" className="link-primary">Támogatás</a> oldalt. 
                  Ha továbbra is problémáid vannak, kapcsolatba léphetsz velünk.
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
            Készen állsz csatlakozni?
          </h2>
          <p className="text-xl mb-8 text-primary-light">
            Csatlakozz most a LiteFox RP közösséghez és élvezd a legjobb roleplay élményt!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/join" 
              className="btn-secondary px-8 py-3 rounded-lg font-semibold"
            >
              Csatlakozás Most
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