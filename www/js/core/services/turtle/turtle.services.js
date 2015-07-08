/**
 * Turtle service.
 *
 * @author Wdnei Paixao {@link https://github.com/wdnei/caretta}
 */
(function () {
    'use strict';

    /**
     * @ngdoc service
     * @name TurtleService
     * @module app.core
     * 
     * @description
     * Service to get the turtle data.
     *
     * @ngInject
     */
    function TurtleService() {
        // Might use a resource here that returns a JSON array


        var turtles = [{
                id: 0,
                nameLt: 'Dermochelys coriacea',
                namePt: 'Tartaruga de Couro ou Gigante',
                names: 'Tartaruga de Couro ou Gigante (Pt), Leatherback Turtle (En), Tortue Luth (Fr), Tortuga Laúd ou Baula (Sp).',
                img: 'img/dermochelys-coriacea-1.jpg'
            }, {
                id: 1,
                nameLt: 'Eretmochelys imbricata',
                namePt: 'Tartaruga de Pente',
                names: 'Tartaruga de Pente (Pt), Hawksbill Turtle (En), Tortue Imbriquée (Fr), Tortuga Carey (Sp).',
                img: 'img/eretmochelys-imbricata-1.jpg'

            }, {
                id: 2,
                nameLt: 'Chelonia mydas',
                namePt: 'Tartaruga Verde',
                names: 'Tartaruga Verde (Pt), Green Turtle (En), Tortue Verte (Fr), Tortuga Verde (Sp).',
                img: 'img/chelonia-mydas-1.jpg'

            }, {
                id: 3,
                nameLt: 'Natator depressus',
                namePt: 'Tartaruga Australiana',
                names: 'Tartaruga Australiana ou Tartaruga de Carapaça Achatada (Pt), Flatback (En), Chelonée à dos Plat ou Tortue Marine à dos Plat (Fr), Tortuga Franca Oriental (Sp).',
                img: 'img/natator-depressus-1.jpg'

            }, {
                id: 4,
                nameLt: 'Lepidochelys olivacea',
                namePt: 'Tartaruga Oliva',
                names: 'Tartaruga Oliva (Pt), Olive Ridley Turtle (En), Tortue Olivâtre (Fr), Tortuga Golfina (Sp).',
                img: 'img/lepidochelys-olivacea-1.jpg'

            }, {
                id: 5,
                nameLt: 'Caretta caretta',
                namePt: 'Tartaruga Cabeçuda',
                names: 'Tartaruga Cabeçuda ou Comum (Pt), Loggerhead Sea Turtle (En), Tortue Caouanne (Fr), Tortuga Caguama (Sp).',
                img: 'img/caretta-caretta-1.jpg'

            }, {
                id: 6,
                nameLt: 'Lepidochelys kempii',
                namePt: 'Tartaruga de Kemp',
                names: 'Tartaruga de Kemp (Pt), Kemp\'s Ridley (En), Lépidochelyde de Kemp (Fr), Tortuga Marina Bastarda (Sp).',
                img: 'img/lepidochelys-kempii-1.jpg'

            }];
        // Some fake testing data
        var turtleOptions = [{
                id: 0,
                option1: 'Corpo constituído por uma carapaça única, grande, alongada e flexível com sete quilhas distintas que se localizam ao longo do comprimento da tartaruga, de cor cinzenta escura ou preta com pontos brancos e barbatanas sem unhas.',
                option2: 'Corpo constituído por uma carapaça óssea, dura, sem quilhas mas com placas grandes e barbatanas com uma ou duas unhas.',
                nextIdOption1: -1,
                nextIdOption2: 1,
                turtleOption1: 0,
                turtleOption2: -1
            }, {
                id: 1,
                option1: 'Carapaça com 4 pares placas laterais.',
                option2: 'Carapaça com 5 ou mais pares de placas laterais.',
                nextIdOption1: 2,
                nextIdOption2: 4,
                turtleOption1: -1,
                turtleOption2: -1
            }, {
                id: 2,
                option1: 'Cabeça estreita, dois pares de escamas pré-frontais e bico como o de um falcão. Carapaça de cor castanho-amarelado com quatro placas laterais imbricando-se como telhas. Barbatanas anteriores e posteriores com duas unhas.',
                option2: 'Cabeça pequena com um único par de escamas pré-orbitais. Carapaça redonda ou oval e as placas não se sobrepõem. Barbatanas com uma unha visível.',
                nextIdOption1: -1,
                nextIdOption2: 3,
                turtleOption1: 1,
                turtleOption2: -1
            }, {
                id: 3,
                option1: 'Mandíbula serrilhada. Carapaça de forma oval. A cor da carapaça varia de verde-claro a muito escuro e de baço a muito brilhante, ou de tons de amarelo, castanho e verde com listras radiantes. O plastrão varia entre o branco e o amarelado, nas populações do Atlântico a tons mais escuros nas populações do Pacífico.',
                option2: 'Carapaça redonda e achatada com placas não sobrepostas e cobertas por uma fina camada de cera; de cor verde-acinzentada e as margens de cor amarelada.',
                nextIdOption1: -1,
                nextIdOption2: -1,
                turtleOption1: 2,
                turtleOption2: 3
            }, {
                id: 4,
                option1: 'Carapaça com 5 pares de placas laterais.',
                option2: 'Carapaça com seis ou mais placas laterais, de cor verde-acinzentado escuro. Barbatanas com uma ou duas unhas visíveis, e podem ter uma unha extra nas barbatanas anteriores.',
                nextIdOption1: 5,
                nextIdOption2: -1,
                turtleOption1: -1,
                turtleOption2: 4
            }, {
                id: 5,
                option1: 'Cabeça grande e mandíbulas fortes. Carapaça oval de cor castanho e o plastrão de cor amarelada. Barbatanas dianteiras curtas e grossas com 2 unhas, e barbatanas traseiras com 2 ou 3 unhas.',
                option2: 'Carapaça redonda, de cor verde-acinzentado escuro. Barbatanas anteriores com uma unha e as posteriores com 1 ou 2 unhas.',
                nextIdOption1: -1,
                nextIdOption2: -1,
                turtleOption1: 5,
                turtleOption2: 6
            }];

        return {
            allOptions: function () {
                return turtleOptions;
            },
            allTurtles: function () {
                return turtles;
            },
            getTurtle: function (turtleId) {
                for (var i = 0; i < turtles.length; i++) {
                    if (turtles[i].id === parseInt(turtleId)) {
                        return turtles[i];
                    }
                }
                return null;
            },
            getOption: function (optionId) {
                for (var i = 0; i < turtleOptions.length; i++) {
                    if (turtleOptions[i].id === parseInt(optionId)) {
                        return turtleOptions[i];
                    }
                }
                return null;
            },
            getFirstOption: function () {
                return turtleOptions[0];
            }
        };
    }

    angular
            .module('app.core')
            .factory('TurtleService', TurtleService);

})();

