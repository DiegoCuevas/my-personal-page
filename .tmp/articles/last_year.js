"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

const React = require("react");

const {
  css
} = require("@emotion/core");

const {
  MDXTag
} = require("@mdx-js/tag");

const layoutProps = {};

class MDXContent extends React.Component {
  constructor(props) {
    super(props);
    this.layout = null;
  }

  render() {
    const {
      components,
      ...props
    } = this.props;
    return (0, _core.jsx)(MDXTag, {
      name: "wrapper",
      components: components
    }, (0, _core.jsx)(MDXTag, {
      name: "p",
      components: components
    }, `El año pasado, a inicios de marzo, tomé la decisión de ingresar a un bootcamp donde estudiaría programación por 6 meses para convertirme en un Full Stack engineer. Esto implicaba estudiar en el bootcamp de 9 am a 6 pm y a su vez seguiría estudiando en la universidad.`), (0, _core.jsx)(MDXTag, {
      name: "p",
      components: components
    }, `Pero antes les contare un poco sobre el 'antes de' , yo estaba estudiando Ing. Electronica desde el 2015 en una universidad 'x', `), (0, _core.jsx)(MDXTag, {
      name: "p",
      components: components
    }, `Pero sucedió algo inesperado. En el mes de abril hubieron problemas con la universidad en la que estaba estudiando, la SUNEDU queria retirar los permisos educacionales y decían que la sede de ingeniería electrónica, la carrera que estaba estudiando, en Lima iban a ser cerrada. Todo eso sucedía mientras yo recién tenía un mes en el bootcamp y ya me gustaba(piensa en otra expresa), así que tenía que tomar una decisión difícil: el bootcamp o la universidad.`), (0, _core.jsx)(MDXTag, {
      name: "p",
      components: components
    }, `Después de una semana de pensar que iba a hacer, elegí por el bootcamp porque sentía que aprendía más que en la universidad, y así estuve 6 meses estudiando casi todo el dia.`), (0, _core.jsx)(MDXTag, {
      name: "p",
      components: components
    }, `Al terminar el bootcamp tenía que buscar trabajo, pero no tuve suerte durante meses.`), (0, _core.jsx)(MDXTag, {
      name: "p",
      components: components
    }, `Hice algunas prácticas en Able (una empresa de desarrollo en Lima) por 3 meses donde me fue genial y por primera vez tuve un rol de líder técnico. El proyecto que nos asignaron salió muy bien y lo mejor es que aprendimos bastante. Las prácticas terminaron en diciembre donde tendría que nuevamente buscar trabajo si o si para poder pagar la deuda del bootcamp, y sí, me olvide mencionar esto, la deuda o préstamo estudiantil  aproximadamente es de 26 mil soles, consiste en que ellos me iban a pagar estudio y comidas por 6 meses, y yo después tendría que devolverlo cuando empiece a trabajar hasta completar el monto.`), (0, _core.jsx)(MDXTag, {
      name: "p",
      components: components
    }, `Bueno estaba en diciembre postulando como loco a todas las empresas que yo creía que coinciden con mi perfil y la mayoría de ellas me decían que no, algunas hasta exageraban con sus respuestas en el feedback de la entrevista y me deprimi por 3 semanas donde no quería saber nada sobre postular a trabajos y programar.
Estábamos a finales de febrero cuando mi hermana me avisó que una empresa estaba en busca de desarrolladores y yo dije ya bueno voy a postular (yo postule porque en fin, una raya más al tigre) la cosa que me fue muy bien en la primera entrevista y la prueba técnica. Me dijeron que el lunes 2 de marzo me iban a dar una respuesta si iba a entrar o no, yo estaba bien nervioso, ese día tuve otra entrevista con el ceo de la empresa (el jefe de jefes), y me dijeron que sí, cuando escuche el sí sentí un alivio total ya me estaba acostumbrando a que me digan que no, y desde entonces estoy trabajando en esa empresa, las primeras semanas fueron un poco pesadas porque tenía que trabajar en un proyecto ya hecho y tenía que acostumbrarme pero ahora me desenvuelvo mejor, aunque siento que todavía me falta aprender bastante y espero seguir aprendiendo pero eso ya es cuestión de tiempo.`));
  }

}

exports.default = MDXContent;
MDXContent.isMDXComponent = true;