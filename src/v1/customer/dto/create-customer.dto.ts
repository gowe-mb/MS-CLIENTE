export class CreateCustomerDto {
    name: string;
    cpf?: string;
    data_nascimento?: Date;
    sexo?: string;
    razao_social?: string;
    nome_fantasia?: string;
    cnpj?: string;
    ie?: string;
    is_isento?: boolean;
    email: string;
    telefone_fisico?: string;
    telefone_movel: string;
}