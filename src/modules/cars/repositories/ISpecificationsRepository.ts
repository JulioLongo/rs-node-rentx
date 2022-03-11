import { Specification } from "../model/Specification";

// interface dto
interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  findByName(name: string): Specification;
  create({ name, description }: ICreateSpecificationDTO): void;
}

export { ICreateSpecificationDTO, ISpecificationsRepository };
