L.Control.Display = L.Control.extend({
    options: {
        backgroundColor: 'rgba(255,255,255, 0.8)',
        borderColor: 'rgb(100,100,100)',
        fontSize: '14px'
    },

    initialize: function(opts){
        L.setOptions(this, opts);
        var disp = this._container = L.DomUtil.create('div');
        disp.id = 'leaflet-control-disp';
        this.setStyle(opts);
    },

    onAdd: function(map) {
        var disp = this._container;
        return disp;
    },

    onRemove: function(map) {
        // Nothing to do here
    },

    show: function(str, opts) {
        var disp = this._container;
        var temp = disp.innerHTML;
        disp.style.display = 'block';
        disp.innerHTML = str ? str : temp === undefined ? '' : temp;
        this.setStyle(opts);
    },

    hidden: function() {
        var disp = this._container;
        disp.style.display = 'none';
    },

    setStyle: function(opts) {
        var disp = this._container;
        opts = opts || {};
        disp.style.fontSize = opts.fontSize || this.options.fontSize;
        disp.style.backgroundColor = opts.backgroundColor || this.options.backgroundColor;
        disp.style.borderColor = opts.borderColor || this.options.borderColor;
    }

});

L.control.display = function(str, opts) {
    return new L.Control.Display(str, opts);
}
