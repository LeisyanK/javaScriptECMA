const DjaivProto = Object.getPrototypeOf(Djaiv); // прототипом Djaiv является dancing series
console.log(DjaivProto.model); // dancing series
const DjaivProtoProto = Object.getPrototypeOf(DjaivProto); // прототипом dancing series является vacuum cleaner
console.log(DjaivProtoProto.model); //vacuum cleaner
const DjaivProtoProtoProto = Object.getPrototypeOf(DjaivProtoProto); // прототипом vacuum cleaner является Object
console.log(DjaivProtoProtoProto); // [object Object]
