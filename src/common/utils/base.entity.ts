import { PrimaryGeneratedColumn, Column, BeforeInsert } from "typeorm";

export class BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'bigint'})
    createdAt: number

    @Column({type: 'bigint', nullable: true})
    updatedAt: number

    @Column({type: 'bigint', nullable: true})
    deletedAt: number

    @BeforeInsert()
    beforeCreate(){
        this.createdAt = Date.now();
    }
}