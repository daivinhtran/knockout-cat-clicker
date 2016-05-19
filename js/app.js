var ViewModel = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable("Tabby");
    this.imgSrc = ko.observable("img/1413379559_412a540d29_z.jpg");
    this.imgAttribution = ko.observable('');

    this.level = ko.computed(function() {
        if (this.clickCount() > 20) {
            return "adult";
        } else if (this.clickCount() > 12) {
            return "teen";
        } else {
            return "child";
        }
    }, this);

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    }
}
ko.applyBindings(new ViewModel());
