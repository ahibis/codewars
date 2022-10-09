function EarthRoute(){
  EarthRoute.vault = []
  this.transfer = parcel =>{
    parcel.destination = "Earth";
    EarthRoute.vault.push(parcel);
  }
}

function MoonRoute (){}
MoonRoute.warehouse = []
MoonRoute.prototype.transfer = (parcel) =>{
  parcel.destination = "Moon";
  MoonRoute.warehouse.push(parcel);
}

function extendTransportSystem(EarthRoute, MoonRoute) {
  const messages = [];
  const oldEarthTransfer = EarthRoute.prototype.transfer;
  EarthRoute.prototype.transfer = function(parcel) {
    messages.push({ ...parcel, origin: "Earth", destination: "Mothership" });
    oldEarthTransfer(parcel);
  };
  const oldMoonTransfer = MoonRoute.prototype.transfer;
  MoonRoute.prototype.transfer = function(parcel) {
    messages.push({ ...parcel, origin: "Moon", destination: "Mothership" });
    oldMoonTransfer(parcel);
  };
  return messages;
}

const mothershipStorage = extendTransportSystem(EarthRoute, MoonRoute);
const earthRoute1 = new EarthRoute();
const moonRoute2 = new MoonRoute();
earthRoute1.transfer({ content: 123 });
moonRoute2.transfer({ text: "abc" });
console.log(mothershipStorage);
console.log(EarthRoute.vault)
console.log(MoonRoute.warehouse)
