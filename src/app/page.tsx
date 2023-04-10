"use client";

import { ChevronsDown, Clover, Heart, Star } from "lucide-react";
import { Dancing_Script, Inter, Merienda, Satisfy } from "next/font/google";
import Image from "next/image";

const font = Merienda({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`min-h-screen max-w-6xl bg-stone-200/80 mx-auto py-24 px-2 ${font.className} prose prose-slate  prose-em:text-xs prose-p:font-thin invert`}
    >
      <h2 className="font-bold text-center text-rose-700">HOLIS CATITO</h2>
      <audio src="/reflection.mp3" loop />
      <div className="text-2xl text-center font-thin space-y-40">
        <div>Primero que nada, ambientemos esto!</div>
        <button
          onClick={() => document.querySelector("audio")?.play()}
          className="underline"
        >
          Subí el volumen y hacé click acá
        </button>
        <div>Espero que disfrutes estas palabritas...</div>
        <ChevronsDown className="lucide lucide-chevrons-down mx-auto animate-bounce h-12 w-12" />
      </div>

      <h1 className="text-center mt-[100vh] text-emerald-700 text-7xl">
        Felices seis meses!
      </h1>
      <div className="mx-auto relative max-w-xl aspect-[9/11] overflow-hidden rounded-xl invert">
        <div className="absolute inset-0.5 overflow-hidden rounded-xl opacity-90 z-10">
          <Image
            src="/look.jpeg"
            width={1000}
            height={1000}
            alt="xd"
            className="-mt-4"
          />
        </div>
        <div className="absolute -inset-48 bg-gradient-to-r from-transparent to-white animate-[spin_10s_linear_infinite]" />
      </div>

      <h3>Holis porota!</h3>
      <p>
        Te escribo por acá. Por algún motivo, hoy pensaba mucho y no puedo creer
        que hayan pasado seis meses ya. Una completa locura!
      </p>
      <ul>
        <li>De a ratos, pienso que es mucho</li>
        <em>
          {" "}
          Mucho por lo vivido, y todo lo que siento por vos. &quot;¿Se podrá
          sentir tanto?&quot; &quot;¿Porque tan mágico?&quot; - me pregunto a
          menudo
        </em>
        <li>Otras veces, pienso que es poco</li>
        <em>
          Poco porque todavía se que hay muchísimo mas para conocer y compartir.
        </em>
      </ul>
      <p>
        Osea, dimos mitad de vuelta al rededor del sol. ¿Que significa?
        <em>We que pregunta jajaja</em>
      </p>
      <p>
        Eso es lo interesante, para mi significa una cantidad de cosas
        impresionantes, no el hecho de que el tiempo transcurra y todo siga su
        curso, pero la oportunidad de compartir momentos, experiencias y cosas
        nuevas con vos.
      </p>
      <b>Sos super importante en mi vida.</b>
      <p>
        Se que tuvimos nuestros altibajos, como seres humanos que somos. Pero
        creo que ambos nos vimos crecer en diferentes aspectos de nuestras
        vidas. Te des cuenta o no, impactas mucho en mi vida, sos una excelente
        compañera, y a la vez me confrontas con ideas, haciéndome crecer. Ojala
        lo mismo pueda ser dicho de mi.
      </p>
      <p>
        Creo que tuve la oportunidad de verte crecer mucho este ultimo año en
        general, y estoy muy agradecido a Dios por como permitió que las cosas
        se dieran.
      </p>
      <hr className="border-gray-500" />
      <p>
        Sinceramente, me cuesta abrir mi corazón, me cuesta expresarlo en
        palabras. Este no es mi fuerte, pero no me quiero privar de explorarlo,
        ni privarte a vos de leer mis ideas o pensamientos; aunque quizá, estén
        pobremente redactados.
      </p>
      <p>
        No se como explicarte, que me siento no merecedor de todo el amor que
        vos me das. Siento que vos lo tenias escondido por ahí y lo estas
        derramando todo para mí. Le pregunto a Dios - &quot;Why?&quot;. - siento
        en el fondo de mi corazoncito, que vos sos un ángel que el manda. Por
        más que a veces queramos continuar nuestros planes terrenales, sabemos
        en el fondo que tenemos un propósito mayor. Y vos me estas haciendo
        aprender cosas alineadas con esto ultimo, que es seguramente lo mas
        importante de esta vida. [O mejor dicho, Dios por medio tuyo.]
      </p>
      <p>
        Aprendo siempre muchísimo de vos. La manera que tenes de tratar con
        problemas, es genial. Y te agradezco de todo corazón, por la paciencia
        que me tuviste y me tenes. No te limites nunca a decirme la verdad, y
        confrontar mis ideas o creencias. Ojala podamos proyectar mucho mas
        juntos, y genuinamente cada uno disfrutar aun mas la vida junto al otro.
        Y por otro lado, mi humilde deseo es que podamos crecer juntos,
        especialmente para ir camino al cielo.
      </p>
      <p>
        Perdón por los malos momentos que te hice pasar, mil, mil disculpas. Voy
        a hacer mi mejor esfuerzo por cambiar mis creencias, analizar la
        evidencia, y corregir mi comunicación. Y si reparaciones necesitan ser
        realizadas, nos podemos sentar a charlarlas, estoy mas que dispuesto a
        realizarlas. Gracias por sostenerme en mis malos momentos, a pesar de
        que yo en ocasiones te trate mal. Sos muy noble y valiente, al no
        pagarme con la misma moneda.
      </p>

      <hr className="border-gray-500" />
      <h3>
        Gracias por leerme, siento que tenia que decirte estas cosas, junto con
        lo mucho que te amo! 🖤
      </h3>
      <br />
      <h4>
        Amor de mi vida, acá te dejo un par de fotitos mas sin particular
        motivo.
        <em>[a mi me encanto ver tu cara por eso las puse jaja]</em>
      </h4>
      <h2 className="flex justify-center mt-8">
        TE AMO <Clover className="ml-4 text-emerald-600 invert" />
        <span className="font-black flex text-transparent bg-gradient-to-r from-rose-600 to-sky-600 bg-clip-text">
          ANA CAMINOTTI
        </span>
        <Heart className="text-rose-600 invert" />
      </h2>
      <div className="invert max-w-xs mx-auto">
        <img src="/boat.jpeg" alt="" />
        <img src="/close.jpeg" alt="" />
        <img src="/first.jpeg" alt="" />
        <img src="/kiss.jpeg" alt="" />
        <img src="/lake.jpeg" alt="" />
        <img src="/mirror.jpeg" alt="" />
        <img src="/selfie.jpeg" alt="" />
        <img src="/new.jpeg" alt="" />
        <img src="/selfie2.jpeg" alt="" />
        <img src="/wap.jpeg" alt="" />
        <img src="/xd.jpeg" alt="" />
      </div>
      <h2 className="text-right">CON MUCHO MUCHO AMOR - tu Matus</h2>
    </main>
  );
}
