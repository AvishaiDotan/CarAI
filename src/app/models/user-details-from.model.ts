export type UserDetailsForm = {
    fullName: string;
    gender: string;
    email: string;
    birthDate: string;
    address: string;
    city: string;
    country: string;
    hobbies: Hobbie[];
    favoriteColor: string;
    seats: number;
    motorType: MotorType;
}

export type Hobbie = 'Reading' | 'Traveling' | 'Playing Video Games' | 'Watching Movies' | 'Listening to Music' | 'Cooking' | 'Exercising';
export type MotorType = 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid';
