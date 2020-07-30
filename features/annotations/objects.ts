const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 0,
    lang: 0,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

//const { age } = profile;
// see alternate ways below
const { age }: { age: number } = profile;
const {
  coords: { lat, lang },
}: { coords: { lat: number; lang: number } } = profile;
