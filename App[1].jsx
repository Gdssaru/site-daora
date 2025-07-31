import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import './App.css'

// Import assets
import heroBackground from './assets/mario_hero_bg.png'
import gameplayBackground from './assets/mario_gameplay_bg.png'
import levelDesignBackground from './assets/mario_level_design_bg.png'

function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-yellow-400">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-yellow-400 pixel-font">SUPER MARIO</h1>
            <div className="hidden md:flex space-x-6">
              {['hero', 'introducao', 'gameplay', 'level-design', 'personagens', 'conclusao'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`px-4 py-2 rounded transition-all duration-300 pixel-font text-sm ${
                    activeSection === section 
                      ? 'bg-yellow-400 text-black' 
                      : 'text-white hover:text-yellow-400'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1).replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="hero" 
        className="min-h-screen flex items-center justify-center relative"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-blue-600/20"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className={`text-6xl md:text-8xl font-bold mb-8 pixel-font text-yellow-400 drop-shadow-lg ${isLoaded ? 'animate-bounce-in' : 'opacity-0'}`}>
            RELATÓRIO
          </h1>
          <h2 className={`text-4xl md:text-6xl font-bold mb-12 pixel-font text-red-500 drop-shadow-lg ${isLoaded ? 'animate-slide-in-right' : 'opacity-0'}`}>
            SUPER MARIO
          </h2>
          <Button 
            onClick={() => scrollToSection('introducao')}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-lg text-xl pixel-font transform hover:scale-105 transition-all duration-300"
          >
            EXPLORAR O MUNDO
          </Button>
        </div>
        
        {/* Floating clouds animation */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-16 h-10 bg-white rounded-full opacity-80"></div>
        </div>
        <div className="absolute top-32 right-20 animate-float-delayed">
          <div className="w-12 h-8 bg-white rounded-full opacity-60"></div>
        </div>
      </section>

      {/* Introdução */}
      <section id="introducao" className="min-h-screen flex items-center bg-gradient-to-b from-blue-500 to-blue-700 relative">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-12 pixel-font text-yellow-400">
              UM DIVISOR DE ÁGUAS
            </h2>
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 mb-8">
              <p className="text-xl md:text-2xl leading-relaxed mb-6 pixel-font">
                SUPER MARIO EM MINHA OPINIÃO É UM JOGO QUE FOI UM DOS DIVISORES DE ÁGUAS DA 
                ANTIGA ERA DOS JOGOS, E MOSTROU PARA TANTO OS GAME DEVS QUANTO PARA O 
                PÚBLICO QUE JOGOS PODEM SER DIFERENTES DO HABITUAL E MESMO ASSIM 
                DIVERTIDOS A SUA MANEIRA, TENDO ISSO EM MENTE.
              </p>
              <p className="text-xl md:text-2xl leading-relaxed pixel-font">
                O JOGO TEM MECÂNICAS INOVADORAS PARA ÉPOCA E MUITA QUALIDADE DE GAME DESIGN 
                PRINCIPALMENTE PRA UMA ÉPOCA SEM MUITOS RECURSOS
              </p>
            </div>
          </div>
        </div>
        
        {/* Animated elements */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-orange-600 to-transparent"></div>
      </section>

      {/* Gameplay */}
      <section 
        id="gameplay" 
        className="min-h-screen flex items-center relative"
        style={{
          backgroundImage: `url(${gameplayBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center pixel-font text-white">
              GAMEPLAY
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-black/50 backdrop-blur-sm rounded-lg p-8">
                <p className="text-lg md:text-xl leading-relaxed mb-6 pixel-font">
                  Super Mario sempre foi um tipo de jogo único que sempre se deu o trabalho de mostrar que tem qualidade pra fazer uma história que se preste a mostrar ao público que somos heróis mesmo com pouco ou nenhum diálogo no caminho.
                </p>
                <p className="text-lg md:text-xl leading-relaxed mb-6 pixel-font">
                  Já mecanicamente temos muitas funções pra poucos botões e isso torna o game bem mais fácil pois apenas com os botões de controle e um de interação temos um game muito inovador e muito jovial tanto qual o público qual deveria atingir.
                </p>
                <p className="text-lg md:text-xl leading-relaxed pixel-font">
                  O jogo segue o padrão de plataforma e entrega pro jogador uma grande experiência e se torna um jogo livre para todos.
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-8 pixel-font text-yellow-400">CONTROLES</h3>
                <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto">
                  {['W', 'A', 'S', 'D'].map((key, index) => (
                    <div 
                      key={key}
                      className={`w-16 h-16 bg-white text-black rounded-lg flex items-center justify-center text-2xl font-bold pixel-font hover:bg-yellow-400 transition-all duration-300 cursor-pointer transform hover:scale-110 ${
                        index === 0 ? 'animate-pulse' : ''
                      }`}
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      {key}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Level Design */}
      <section 
        id="level-design" 
        className="min-h-screen flex items-center relative"
        style={{
          backgroundImage: `url(${levelDesignBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-green-600/40"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-12 pixel-font text-yellow-400">
              LEVEL DESIGN INOVADOR
            </h2>
            
            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-8 mb-12">
              <p className="text-xl md:text-2xl leading-relaxed pixel-font">
                MARIO FOI UM MARCO EM LEVEL DESIGN EM PLATAFORMA POR SEU MUNDO VIVO E 
                PERSONAGENS MARCANTES, DESDE INTERAÇÕES COM O MAPA ATÉ SEUS DIÁLOGOS 
                SIMPLES MOSTRANDO UM POUCO MAIS DO MUNDO PRO JOGADOR ENQUANTO ELE JOGA.
              </p>
            </div>
            
            {/* Wanted Poster */}
            <div className="max-w-md mx-auto bg-yellow-100 text-black p-6 rounded-lg transform rotate-3 hover:rotate-0 transition-transform duration-300 shadow-2xl">
              <h3 className="text-2xl font-bold mb-4 pixel-font text-red-600">WANTED</h3>
              <div className="w-32 h-32 bg-gray-300 mx-auto mb-4 rounded-lg flex items-center justify-center">
                <span className="text-4xl">👤</span>
              </div>
              <h4 className="text-xl font-bold pixel-font">DEAD ONLY</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Personagens */}
      <section id="personagens" className="min-h-screen flex items-center bg-gradient-to-br from-orange-500 via-red-500 to-red-600 relative">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center pixel-font text-yellow-400">
              PERSONAGENS MARCANTES
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8">
                <p className="text-xl md:text-2xl leading-relaxed pixel-font">
                  ALÉM DE SEU DESIGN MARCANTE A MARCA CONSEGUIU APROVEITAR BEM O PERSONAGEM E 
                  TORNÁ-LO UM DOS MASCOTES MAIS CONHECIDOS FAZENDO TODA VEZ QUE VOCÊ PENSE EM 
                  PLATAFORMA, PENSE EM MARIO
                </p>
                <br />
                <p className="text-xl md:text-2xl leading-relaxed pixel-font">
                  MAIS SE O JOGO NÃO TE DIVERTE IGUAL MARIO VOCÊ SE DECEPCIONA COM A 
                  QUALIDADE DO JOGO COMO UM TODO
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-black/50 backdrop-blur-sm rounded-lg p-6 text-center hover:scale-105 transition-transform duration-300">
                  <div className="w-24 h-24 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                    🍄
                  </div>
                  <h3 className="text-xl font-bold pixel-font">MARIO</h3>
                  <p className="text-sm pixel-font mt-2">O Herói</p>
                </div>
                
                <div className="bg-black/50 backdrop-blur-sm rounded-lg p-6 text-center hover:scale-105 transition-transform duration-300">
                  <div className="w-24 h-24 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                    🐢
                  </div>
                  <h3 className="text-xl font-bold pixel-font">BOWSER</h3>
                  <p className="text-sm pixel-font mt-2">O Vilão</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusão */}
      <section id="conclusao" className="min-h-screen flex items-center bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 relative">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-12 pixel-font text-white">
              O LEGADO CONTINUA
            </h2>
            
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 mb-12">
              <p className="text-xl md:text-2xl leading-relaxed pixel-font">
                ALÉM DE TERMOS SEMPRE O MUNDO DE MARIO NA CABEÇA E ASSOCIARMOS QUALQUER 
                CENÁRIO MAIS AMARELO E AZUL COM O JOGO EM SI
              </p>
            </div>
            
            {/* Mario sorrindo */}
            <div className="text-center">
              <div className="w-32 h-32 bg-red-500 rounded-full mx-auto mb-8 flex items-center justify-center text-6xl animate-bounce">
                😊
              </div>
              <p className="text-2xl pixel-font text-white">Mario sempre sorrindo!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 py-12 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h3 className="text-3xl font-bold mb-4 pixel-font text-yellow-400">
            SUPER MARIO BROS
          </h3>
          <p className="text-lg pixel-font mb-8">
            Um jogo que mudou a história dos videogames para sempre
          </p>
          
          {/* Running Mario animation */}
          <div className="relative h-20 mb-8">
            <div className="absolute left-0 w-16 h-16 bg-red-500 rounded-lg animate-run-across flex items-center justify-center text-2xl">
              🏃‍♂️
            </div>
          </div>
          
          <p className="text-sm pixel-font text-gray-300">
            © 2024 - Relatório Super Mario. Baseado na apresentação original.
          </p>
        </div>
        
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-4 left-4 w-8 h-8 bg-yellow-400 rounded-full animate-pulse"></div>
          <div className="absolute top-8 right-8 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-4 left-1/4 w-4 h-4 bg-red-400 rounded-full animate-pulse"></div>
        </div>
      </footer>
    </div>
  )
}

export default App

