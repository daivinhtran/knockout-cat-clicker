var initialCats = [
    {
        clickCount: 0,
        name: 'Bossy',
        imgSrc: 'img/Bossy.jpg',
        imgAttribution: 'https://vinhtran.com/img/Bossy.jpg',
        nickNames: ['Manager', 'Engineer']
    },
    {
        clickCount: 0,
        name: 'Sleepy',
        imgSrc: 'img/Sleepy.jpg',
        imgAttribution: 'https://vinhtran.com/img/Sleepy.jpg',
        nickNames: ['ZZZZ']
    },
    {
        clickCount: 0,
        name: 'Teddy',
        imgSrc: 'img/Teddy.jpg',
        imgAttribution: 'https://vinhtran.com/img/Teddy.jpg',
        nickNames: ['Garrrrr']
    },
    {
        clickCount: 0,
        name: "Tiger",
        imgSrc: "img/Tiger.jpg",
        imgAttribution: 'https://vinhtran.com/img/Tiger.jpg',
        nickNames: ['ZZZZ']
    },
    {
        clickCount: 0,
        name: "Yellowie",
        imgSrc: "img/Yellowie.jpg",
        imgAttribution: 'https://vinhtran.com/img/Yellowie.jpg',
        nickNames: ['Yellowwww']
    }
]

var Cat = function(data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);
    this.nicknames = ko.observable(data.nickNames);

    this.level = ko.computed(function() {
        if (this.clickCount() > 20) {
            return "adult";
        } else if (this.clickCount() > 12) {
            return "teen";
        } else {
            return "child";
        }
    }, this);


};

var ViewModel = function() {
    this.catList = ko.observableArray([]);

    initialCats.forEach((catData) => {
        this.catList.push(new Cat(catData));
    })

    this.currentCat = ko.observable(this.catList()[0]);

    this.updateCurrent = (selectedCat) => {
        this.currentCat(selectedCat);
    }

    this.incrementCounter = () => {
        this.currentCat().clickCount(this.currentCat().clickCount() + 1);
    }

};
ko.applyBindings(new ViewModel());
