app.controller('total',function($scope,$resource){
    $('.round').arctext({radius: 200});

    $scope.sync = function(){
        localStorage.removeItem('info');
        localStorage.removeItem('cats');
        localStorage.removeItem('hosper');
        localStorage.removeItem('for_beer');
        localStorage.removeItem('salads');
        localStorage.removeItem('hot_snacks');
        localStorage.removeItem('soups');
        localStorage.removeItem('pasta');
        localStorage.removeItem('bird');
        localStorage.removeItem('stuff');
        localStorage.removeItem('sous');
        localStorage.removeItem('deserts');
        localStorage.removeItem('beer');
        localStorage.removeItem('s_wine');
        localStorage.removeItem('g_wine');
        localStorage.removeItem('w_wine');
        localStorage.removeItem('r_wine');
        localStorage.removeItem('n_wine');
        localStorage.removeItem('vermouth');
        localStorage.removeItem('brandy');
        localStorage.removeItem('calvados');
        localStorage.removeItem('armagnac');
        localStorage.removeItem('ir_whiskey');
        localStorage.removeItem('ss_whiskey');
        localStorage.removeItem('bs_whiskey');
        localStorage.removeItem('am_whiskey');
        localStorage.removeItem('jap_whiskey');
        localStorage.removeItem('jap_malt');
        localStorage.removeItem('polugar');
        localStorage.removeItem('vodka');
        localStorage.removeItem('tequila');
        localStorage.removeItem('gin');
        localStorage.removeItem('rum');
        localStorage.removeItem('liquer');
        localStorage.removeItem('mix_drink');
        localStorage.removeItem('shot_drink');
        localStorage.removeItem('cl_coctail');
        localStorage.removeItem('popular');
        localStorage.removeItem('wet_pussy');
        localStorage.removeItem('na_coctail');
        localStorage.removeItem('drinks');
        localStorage.removeItem('fresh');
        localStorage.removeItem('energy');
        localStorage.removeItem('coffee');
        localStorage.removeItem('tea');
        localStorage.removeItem('sp_offer');
        localStorage.removeItem('cigarettes');
        localStorage.removeItem('cigars');
        localStorage.removeItem('launch');
        localStorage.removeItem('branch');





















        var toHosper = $resource('http://oharapub.kz/getMenuByCat/%D1%85%D0%BE%D1%81%D0%BF%D0%B5%D1%80');
        var hosper = toHosper.query(function(){
            var toLocHosper = JSON.stringify(hosper);
            localStorage.setItem('hosper',toLocHosper);
        });

        var toForBeer = $resource('http://oharapub.kz/getMenuByCat/%D1%80%D0%B5%D0%BA%D0%BE%D0%BC%D0%B5%D0%BD%D0%B4%D0%B0%D1%86%D0%B8%D0%B8%20%D0%BA%20%D0%BF%D0%B8%D0%B2%D1%83');
        var for_beer = toForBeer.query(function(){
            var toLocForBeer = JSON.stringify(for_beer);
            localStorage.setItem('for_beer',toLocForBeer);
        });

        var toSalads = $resource('http://oharapub.kz/getMenuByCat/%D1%81%D0%B0%D0%BB%D0%B0%D1%82%D1%8B');
        var salads = toSalads.query(function(){
            var toLocSalads = JSON.stringify(salads);
            localStorage.setItem('salads',toLocSalads);
        });

        var toHotSnacks = $resource('http://oharapub.kz/getMenuByCat/%D0%B3%D0%BE%D1%80%D1%8F%D1%87%D0%B8%D0%B5%20%D0%B7%D0%B0%D0%BA%D1%83%D1%81%D0%BA%D0%B8');
        var hot_snacks = toHotSnacks.query(function(){
            var toLocHotSnacks = JSON.stringify(hot_snacks);
            localStorage.setItem('hot_snacks',toLocHotSnacks);
        });

        var toSoups = $resource('http://oharapub.kz/getMenuByCat/%D1%81%D1%83%D0%BF%D1%8B');
        var soups = toSoups.query(function(){
            var toLocSoups = JSON.stringify(soups);
            localStorage.setItem('soups',toLocSoups);
        });

        var toPasta = $resource('http://oharapub.kz/getMenuByCat/%D0%BF%D0%B0%D1%81%D1%82%D0%B0');
        var pasta = toPasta.query(function(){
            var toLocPasta = JSON.stringify(pasta);
            localStorage.setItem('pasta',toLocPasta);
        });

        var toBird = $resource('http://oharapub.kz/getMenuByCat/%D0%B1%D0%BB%D1%8E%D0%B4%D0%B0%20%D0%B8%D0%B7%20%D0%BF%D1%82%D0%B8%D1%86%D1%8B');
        var bird = toBird.query(function(){
            var toLocBird = JSON.stringify(bird);
            localStorage.setItem('bird',toLocBird);
        });

        var toStuff = $resource('http://oharapub.kz/getMenuByCat/%D0%B3%D0%B0%D1%80%D0%BD%D0%B8%D1%80');
        var stuff = toStuff.query(function(){
            var toLocStuff = JSON.stringify(stuff);
            localStorage.setItem('stuff',toLocStuff);
        });

        var toSous = $resource('http://oharapub.kz/getMenuByCat/соусы');
        var sous = toSous.query(function(){
            var toLocSous = JSON.stringify(sous);
            localStorage.setItem('sous',toLocSous);
        });

        var toDeserts = $resource('http://oharapub.kz/getMenuByCat/десерты');
        var deserts = toDeserts.query(function(){
            var toLocDeserts = JSON.stringify(deserts);
            localStorage.setItem('deserts',toLocDeserts);
        });

        var toBeer = $resource('http://oharapub.kz/getMenuByCat/beer');
        var beer = toBeer.query(function(){
            var toLocBeer = JSON.stringify(beer);
            localStorage.setItem('beer',toLocBeer);
        });

        var toSWine = $resource('http://oharapub.kz/getMenuByCat/sparkling wine');
        var s_wine = toSWine.query(function(){
            var toLocSWine = JSON.stringify(s_wine);
            localStorage.setItem('s_wine',toLocSWine);
        });

        var toGWine = $resource('http://oharapub.kz/getMenuByCat/wine by the glass');
        var g_wine = toGWine.query(function(){
            var toLocGWine = JSON.stringify(g_wine);
            localStorage.setItem('g_wine',toLocGWine);
        });

        var toWWine = $resource('http://oharapub.kz/getMenuByCat/white wine');
        var w_wine = toWWine.query(function(){
            var toLocWWine = JSON.stringify(w_wine);
            localStorage.setItem('w_wine',toLocWWine);
        });

        var toRWine = $resource('http://oharapub.kz/getMenuByCat/red wine');
        var r_wine = toRWine.query(function(){
            var toLocRWine = JSON.stringify(r_wine);
            localStorage.setItem('r_wine',toLocRWine);
        });

        var toNWine = $resource('http://oharapub.kz/getMenuByCat/new world');
        var n_wine = toNWine.query(function(){
            var toLocNWine = JSON.stringify(n_wine);
            localStorage.setItem('n_wine',toLocNWine);
        });

        var toVermouth = $resource('http://oharapub.kz/getMenuByCat/Vermouth. Bitter. Digestive.');
        var vermouth = toVermouth.query(function(){
            var toLocVermouth = JSON.stringify(vermouth);
            localStorage.setItem('vermouth',toLocVermouth);
        });

        var toBrandy = $resource('http://oharapub.kz/getMenuByCat/Brandy. Cognac.');
        var brandy = toBrandy.query(function(){
            var toLocBrandy = JSON.stringify(brandy);
            localStorage.setItem('brandy',toLocBrandy);
        });

        var toCalvados = $resource('http://oharapub.kz/getMenuByCat/Calvados');
        var calvados = toCalvados.query(function(){
            var toLocCalvados = JSON.stringify(calvados);
            localStorage.setItem('calvados',toLocCalvados);
        });

        var toArmagnac = $resource('http://oharapub.kz/getMenuByCat/Bas Armagnac');
        var armagnac = toArmagnac.query(function(){
            var toLocArmagnac = JSON.stringify(armagnac);
            localStorage.setItem('armagnac',toLocArmagnac);
        });

        var toIrWhiskey = $resource('http://oharapub.kz/getMenuByCat/Irish whiskey');
        var ir_whiskey = toIrWhiskey.query(function(){
            var toLocIrWhiskey = JSON.stringify(ir_whiskey);
            localStorage.setItem('ir_whiskey',toLocIrWhiskey);
        });

        var toSSWhiskey = $resource('http://oharapub.kz/getMenuByCat/Single malt Scottish whisky');
        var ss_whiskey = toSSWhiskey.query(function(){
            var toLocSSWhiskey = JSON.stringify(ss_whiskey);
            localStorage.setItem('ss_whiskey',toLocSSWhiskey);
        });

        var toBSWhiskey = $resource('http://oharapub.kz/getMenuByCat/Blended Scottish whisky');
        var bs_whiskey = toBSWhiskey.query(function(){
            var toLocBSWhiskey = JSON.stringify(bs_whiskey);
            localStorage.setItem('bs_whiskey',toLocBSWhiskey);
        });

        var toAmWhiskey = $resource('http://oharapub.kz/getMenuByCat/American Whiskey');
        var am_whiskey = toAmWhiskey.query(function(){
            var toLocAmWhiskey = JSON.stringify(am_whiskey);
            localStorage.setItem('am_whiskey',toLocAmWhiskey);
        });

        var toJapWhiskey = $resource('http://oharapub.kz/getMenuByCat/Japanese Whisky');
        var jap_whiskey = toJapWhiskey.query(function(){
            var toLocJapWhiskey = JSON.stringify(jap_whiskey);
            localStorage.setItem('jap_whiskey',toLocJapWhiskey);
        });

        var toJapMalt = $resource('http://oharapub.kz/getMenuByCat/Japanese Malt');
        var jap_malt = toJapMalt.query(function(){
            var toLocJapMalt = JSON.stringify(jap_malt);
            localStorage.setItem('jap_malt',toLocJapMalt);
        });

        var toPolugar = $resource('http://oharapub.kz/getMenuByCat/Polugar');
        var polugar = toPolugar.query(function(){
            var toLocPolugar = JSON.stringify(polugar);
            localStorage.setItem('polugar',toLocPolugar);
        });

        var toVodka = $resource('http://oharapub.kz/getMenuByCat/Vodka');
        var vodka = toVodka.query(function(){
            var toLocVodka = JSON.stringify(vodka);
            localStorage.setItem('vodka',toLocVodka);
        });

        var toTequila = $resource('http://oharapub.kz/getMenuByCat/Tequila');
        var tequila = toTequila.query(function(){
            var toLocTequila = JSON.stringify(tequila);
            localStorage.setItem('tequila',toLocTequila);
        });

        var toGin = $resource('http://oharapub.kz/getMenuByCat/Gin');
        var gin = toGin.query(function(){
            var toLocGin = JSON.stringify(gin);
            localStorage.setItem('gin',toLocGin);
        });

        var toRum = $resource('http://oharapub.kz/getMenuByCat/Rum');
        var rum = toRum.query(function(){
            var toLocRum = JSON.stringify(rum);
            localStorage.setItem('rum',toLocRum);
        });

        var toLiquer = $resource('http://oharapub.kz/getMenuByCat/Liqueurs');
        var liquer = toLiquer.query(function(){
            var toLocLiquer = JSON.stringify(liquer);
            localStorage.setItem('liquer',toLocLiquer);
        });

        var toMixDrink = $resource('http://oharapub.kz/getMenuByCat/Mix Drink');
        var mix_drink = toMixDrink.query(function(){
            var toLocMixDrink = JSON.stringify(mix_drink);
            localStorage.setItem('mix_drink',toLocMixDrink);
        });

        var toShotDrink = $resource('http://oharapub.kz/getMenuByCat/Shot drinks');
        var shot_drink = toShotDrink.query(function(){
            var toLocShotDrink = JSON.stringify(shot_drink);
            localStorage.setItem('shot_drink',toLocShotDrink);
        });

        var toClCoctail = $resource('http://oharapub.kz/getMenuByCat/Classic cocktails');
        var cl_coctail = toClCoctail.query(function(){
            var toLocClCoctail = JSON.stringify(cl_coctail);
            localStorage.setItem('cl_coctail',toLocClCoctail);
        });

        var toPopular = $resource('http://oharapub.kz/getMenuByCat/ПОПУЛЯРНЫЕ');
        var popular = toPopular.query(function(){
            var toLocPopular = JSON.stringify(popular);
            localStorage.setItem('popular',toLocPopular);
        });

        var toWetPussy = $resource('http://oharapub.kz/getMenuByCat/Wet pussy drinks');
        var wet_pussy = toWetPussy.query(function(){
            var toLocWetPussy = JSON.stringify(wet_pussy);
            localStorage.setItem('wet_pussy',toLocWetPussy);
        });

        var toNACoctail = $resource('http://oharapub.kz/getMenuByCat/Non-Alcohol Cocktails');
        var na_coctail = toNACoctail.query(function(){
            var toLocNACoctail = JSON.stringify(na_coctail);
            localStorage.setItem('na_coctail',toLocNACoctail);
        });

        var toDrinks = $resource('http://oharapub.kz/getMenuByCat/Drinks');
        var drinks = toDrinks.query(function(){
            var toLocDrinks = JSON.stringify(drinks);
            localStorage.setItem('drinks',toLocDrinks);
        });

        var toFresh = $resource('http://oharapub.kz/getMenuByCat/Fresh juices');
        var fresh = toFresh.query(function(){
            var toLocFresh = JSON.stringify(fresh);
            localStorage.setItem('fresh',toLocFresh);
        });

        var toEnergy = $resource('http://oharapub.kz/getMenuByCat/Energy drink');
        var energy = toEnergy.query(function(){
            var toLocEnergy = JSON.stringify(energy);
            localStorage.setItem('energy',toLocEnergy);
        });

        var toCoffee = $resource('http://oharapub.kz/getMenuByCat/Coffee');
        var coffee = toCoffee.query(function(){
            var toLocCoffee = JSON.stringify(coffee);
            localStorage.setItem('coffee',toLocCoffee);
        });

        var toTea = $resource('http://oharapub.kz/getMenuByCat/Tea');
        var tea = toTea.query(function(){
            var toLocTea = JSON.stringify(tea);
            localStorage.setItem('tea',toLocTea);
        });

        var toSpOffer = $resource('http://oharapub.kz/getMenuByCat/Special Offer');
        var sp_offer = toSpOffer.query(function(){
            var toLocSpOffer = JSON.stringify(sp_offer);
            localStorage.setItem('sp_offer',toLocSpOffer);
        });

        var toCigarettes = $resource('http://oharapub.kz/getMenuByCat/Cigarettes');
        var cigarettes = toCigarettes.query(function(){
            var toLocCigarettes = JSON.stringify(cigarettes);
            localStorage.setItem('cigarettes',toLocCigarettes);
        });

        var toCigars = $resource('http://oharapub.kz/getMenuByCat/Cigars');
        var cigars = toCigars.query(function(){
            var toLocCigars = JSON.stringify(cigars);
            localStorage.setItem('cigars',toLocCigars);
        });

        var toLaunch = $resource('http://oharapub.kz/getMenuByCat/ланч');
        var launch = toLaunch.query(function(){
            var toLocLaunch = JSON.stringify(launch);
            localStorage.setItem('launch',toLocLaunch);
        });

        var toBranch = $resource('http://oharapub.kz/getMenuByCat/бранч');
        var branch = toBranch.query(function(){
            var toLocBranch = JSON.stringify(branch);
            localStorage.setItem('branch',toLocBranch);
        });






















        var categories = [];
        var typesObj = [];
        var photos = [];
        var todo = $resource('http://oharapub.kz/getMenuTotal');
        var info = todo.query(function(){
            var toLocInfo = JSON.stringify(info);
            localStorage.setItem('info',toLocInfo);
            for(var i=0; i<info.length;i++){

                    if(photos.indexOf(info[i].dish_photo)==-1){
                        photos.push(info[i].dish_photo);

                    //FileTransfer
                        var fileURL = 'cdvfile://localhost/persistent/'+info[i].dish_photo;
                        var fileTransfer = new FileTransfer();
                        var uri = encodeURI("http://oharapub.kz/uploaded/mini_"+info[i].dish_photo);

                        fileTransfer.download(
                            uri,
                            fileURL,
                            function(entry) {
                                console.log("download complete: " + entry.toURL());
                            },
                            function(error) {
                                console.log("download error source " + error.source);
                                console.log("download error target " + error.target);
                                console.log("upload error code" + error.code);
                            },
                            false,
                            {
                                headers: {
                                    "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
                                }
                            }
                        );
                        //FileTransferEnd

                    }



                var type = {};
                type.type = info[i].dish_type;
                type.category = info[i].dish_category;

                if(categories.indexOf(info[i].dish_category)==-1){
                    categories.push(info[i].dish_category);
                    typesObj.push(type);
                }


            }
            var toLocCats = JSON.stringify(typesObj);
            localStorage.setItem('cats',toLocCats);
        });





        }





    $scope.cats = JSON.parse(localStorage.getItem('cats'));
    $scope.info = JSON.parse(localStorage.getItem('info'));
    $scope.hosper = JSON.parse(localStorage.getItem('hosper'));
    $scope.for_beer = JSON.parse(localStorage.getItem('for_beer'));
    $scope.salads = JSON.parse(localStorage.getItem('salads'));
    $scope.hot_snacks = JSON.parse(localStorage.getItem('hot_snacks'));
    $scope.soups = JSON.parse(localStorage.getItem('soups'));
    $scope.pasta = JSON.parse(localStorage.getItem('pasta'));
    $scope.bird = JSON.parse(localStorage.getItem('bird'));
    $scope.stuff = JSON.parse(localStorage.getItem('stuff'));
    $scope.sous = JSON.parse(localStorage.getItem('sous'));
    $scope.deserts = JSON.parse(localStorage.getItem('deserts'));
    $scope.beer = JSON.parse(localStorage.getItem('beer'));
    $scope.s_wine = JSON.parse(localStorage.getItem('s_wine'));
    $scope.g_wine = JSON.parse(localStorage.getItem('g_wine'));
    $scope.w_wine = JSON.parse(localStorage.getItem('w_wine'));
    $scope.r_wine = JSON.parse(localStorage.getItem('r_wine'));
    $scope.n_wine = JSON.parse(localStorage.getItem('n_wine'));
    $scope.vermouth = JSON.parse(localStorage.getItem('vermouth'));
    $scope.brandy = JSON.parse(localStorage.getItem('brandy'));
    $scope.calvados = JSON.parse(localStorage.getItem('calvados'));
    $scope.armagnac = JSON.parse(localStorage.getItem('armagnac'));
    $scope.ir_whiskey = JSON.parse(localStorage.getItem('ir_whiskey'));
    $scope.ss_whiskey = JSON.parse(localStorage.getItem('ss_whiskey'));
    $scope.bs_whiskey = JSON.parse(localStorage.getItem('bs_whiskey'));
    $scope.am_whiskey = JSON.parse(localStorage.getItem('am_whiskey'));
    $scope.jap_whiskey = JSON.parse(localStorage.getItem('jap_whiskey'));
    $scope.jap_malt = JSON.parse(localStorage.getItem('jap_malt'));
    $scope.polugar = JSON.parse(localStorage.getItem('polugar'));
    $scope.vodka = JSON.parse(localStorage.getItem('vodka'));
    $scope.tequila = JSON.parse(localStorage.getItem('tequila'));
    $scope.gin = JSON.parse(localStorage.getItem('gin'));
    $scope.rum = JSON.parse(localStorage.getItem('rum'));
    $scope.liquer = JSON.parse(localStorage.getItem('liquer'));
    $scope.mix_drink = JSON.parse(localStorage.getItem('mix_drink'));
    $scope.shot_drink = JSON.parse(localStorage.getItem('shot_drink'));
    $scope.cl_coctail = JSON.parse(localStorage.getItem('cl_coctail'));
    $scope.popular = JSON.parse(localStorage.getItem('popular'));
    $scope.wet_pussy = JSON.parse(localStorage.getItem('wet_pussy'));
    $scope.na_coctail = JSON.parse(localStorage.getItem('na_coctail'));
    $scope.drinks = JSON.parse(localStorage.getItem('drinks'));
    $scope.fresh = JSON.parse(localStorage.getItem('fresh'));
    $scope.energy = JSON.parse(localStorage.getItem('energy'));
    $scope.coffee = JSON.parse(localStorage.getItem('coffee'));
    $scope.tea = JSON.parse(localStorage.getItem('tea'));
    $scope.sp_offer = JSON.parse(localStorage.getItem('sp_offer'));
    $scope.cigarettes = JSON.parse(localStorage.getItem('cigarettes'));
    $scope.cigars = JSON.parse(localStorage.getItem('cigars'));
    $scope.launch = JSON.parse(localStorage.getItem('launch'));
    $scope.branch = JSON.parse(localStorage.getItem('branch'));
























});

