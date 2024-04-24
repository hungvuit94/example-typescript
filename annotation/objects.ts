const profile = {
  name: 'tovy',
  age: 20,
  coords: {
    lat: 20,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
  setName(name: string): void {
    this.name = name;
  },
};

const { age }: { age: number } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
