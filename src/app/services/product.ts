import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    // === BOLOS ===
    {
      id: 1,
      name: 'Bolo de Morango',
      price: 45.00,
      description: 'Bolo fofinho recheado com creme e morangos frescos. Cobertura com chantilly e frutas selecionadas. Serve até 10 pessoas.',
      image: 'bolo-morango.jpg',
      category: 'Bolos'
    },
    {
      id: 2,
      name: 'Bolo de Ninho',
      price: 42.00,
      description: 'Bolo de leite ninho com recheio cremoso e cobertura generosa. Sabor suave e irresistível. Serve até 10 pessoas.',
      image: 'Bolo_de_ninho.jpg',
      category: 'Bolos'
    },
    {
      id: 3,
      name: 'Bolo de Limão',
      price: 38.00,
      description: 'Bolo de limão com cobertura de glacê cítrico. Refrescante e leve. Serve até 8 pessoas.',
      image: 'Bolo_de_limao.jpg',
      category: 'Bolos'
    },
    {
      id: 4,
      name: 'Bolo de Ameixa com Doce de Leite',
      price: 48.00,
      description: 'Bolo de ameixa com camadas de doce de leite artesanal. Combinação perfeita de sabores. Serve até 10 pessoas.',
      image: 'Bolo_de_doce_de_leite_com_ameixa.jpg',
      category: 'Bolos'
    },
    {
      id: 5,
      name: 'Bolo de Milho',
      price: 32.00,
      description: 'Bolo de milho cremoso feito com milho verde fresco. Receita tradicional caseira. Serve até 8 pessoas.',
      image: 'Bolo_de_milho.jpg',
      category: 'Bolos'
    },
    {
      id: 6,
      name: 'Bolo de Fubá',
      price: 30.00,
      description: 'Bolo de fubá fofinho com erva-doce. Perfeito para acompanhar um cafézinho. Serve até 8 pessoas.',
      image: 'Bolo_de_fuba.jpg',
      category: 'Bolos'
    },

    // === PÃES ===
    {
      id: 7,
      name: 'Pão Australiano',
      price: 14.90,
      description: 'Pão australiano escuro com sabor adocicado. Casca macia e miolo fofinho. Ideal para sanduíches gourmet.',
      image: 'Pao_australiano.jpg',
      category: 'Pães'
    },
    {
      id: 8,
      name: 'Pão de Leite',
      price: 9.90,
      description: 'Pão de leite macio e levemente adocicado. Perfeito para o café da manhã ou lanche da tarde.',
      image: 'Pao_de_leite.jpg',
      category: 'Pães'
    },
    {
      id: 9,
      name: 'Pão Sovado',
      price: 11.90,
      description: 'Pão sovado tradicional com casca dourada e miolo macio. Feito com manteiga de qualidade.',
      image: 'Pao_sovado.jpg',
      category: 'Pães'
    },
    {
      id: 10,
      name: 'Pão de Batata',
      price: 12.90,
      description: 'Pão de batata fofinho e saboroso. Massa leve com toque de batata. Ótimo puro ou recheado.',
      image: 'Pao_de_batata.jpg',
      category: 'Pães'
    },
    {
      id: 11,
      name: 'Pão Sírio',
      price: 8.90,
      description: 'Pão sírio fininho e macio. Perfeito para acompanhar coalhada, homus ou montar wraps.',
      image: 'Pao_sirio.jpg',
      category: 'Pães'
    },
    {
      id: 12,
      name: 'Baguete Francesa',
      price: 10.90,
      description: 'Baguete crocante por fora e macia por dentro. Receita tradicional francesa com fermentação longa.',
      image: 'Baguete_francesa.jpg',
      category: 'Pães'
    },
    {
      id: 13,
      name: 'Pão Integral',
      price: 11.50,
      description: 'Pão integral rico em fibras e grãos. Opção saudável para o dia a dia. Fonte de energia.',
      image: 'Pao_integral.jpg',
      category: 'Pães'
    },
    {
      id: 14,
      name: 'Baguete Integral',
      price: 12.50,
      description: 'Baguete integral crocante com grãos selecionados. Combinação de sabor e saúde.',
      image: 'Baguete_integral.jpg',
      category: 'Pães'
    },
    {
      id: 15,
      name: 'Ciabatta',
      price: 13.90,
      description: 'Ciabatta italiana artesanal com casca crocante e miolo aerado. Perfeita para bruschetta.',
      image: 'Ciabatta.jpg',
      category: 'Pães'
    },
    {
      id: 16,
      name: 'Baguete de Parmesão',
      price: 14.90,
      description: 'Baguete com queijo parmesão ralado na cobertura. Sabor intenso e casca dourada.',
      image: 'Baguete_parmesao.jpg',
      category: 'Pães'
    },

    // === DOCES ===
    {
      id: 17,
      name: 'Sonho',
      price: 7.50,
      description: 'Sonho fofo recheado com creme de baunilha. Coberto com açúcar. Feito fresquinho todos os dias.',
      image: 'Sonhos.jpg',
      category: 'Doces'
    },
    {
      id: 18,
      name: 'Carolina',
      price: 6.50,
      description: 'Carolina crocante recheada com creme de chocolate. Cobertura de chocolate meio amargo.',
      image: 'Carolina.jpg',
      category: 'Doces'
    },
    {
      id: 19,
      name: 'Cone de Doce de Leite',
      price: 5.90,
      description: 'Cone crocante recheado com doce de leite artesanal. Irresistível para os amantes de doce.',
      image: 'Canudinhos.jpg',
      category: 'Doces'
    },
    {
      id: 20,
      name: 'Bomba de Chocolate',
      price: 8.00,
      description: 'Bomba recheada com creme de chocolate belga. Massa leve e cobertura generosa.',
      image: 'Bomba.jpg',
      category: 'Doces'
    },
    {
      id: 21,
      name: 'Rosquinha',
      price: 4.50,
      description: 'Rosquinha frita com cobertura de açúcar e canela. Crocante por fora e macia por dentro.',
      image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=400&fit=crop',
      category: 'Doces'
    },
    {
      id: 22,
      name: 'Brigadeiro',
      price: 3.50,
      description: 'Brigadeiro gourmet feito com chocolate nobre. Coberto com granulado belga. Unidade.',
      image: 'Brigadeiro.jpg',
      category: 'Doces'
    },
    {
      id: 23,
      name: 'Beijinho',
      price: 3.50,
      description: 'Beijinho cremoso de coco ralado. Feito com leite condensado e coberto com coco fresco. Unidade.',
      image: 'Beijinho.jpg',
      category: 'Doces'
    },
    {
      id: 24,
      name: 'Quindim',
      price: 5.00,
      description: 'Quindim tradicional feito com gemas, açúcar e coco. Textura firme e sabor marcante. Unidade.',
      image: 'Quindim.jpg',
      category: 'Doces'
    },
    {
      id: 25,
      name: 'Bicho de Pé',
      price: 3.50,
      description: 'Docinho de bicho de pé com sabor morango. Coberto com granulado rosa. Unidade.',
      image: 'Bicho_de_pe.jpg',
      category: 'Doces'
    },
    {
      id: 26,
      name: 'Casadinho',
      price: 4.00,
      description: 'Biscoito casadinho com recheio de goiabada. Dois biscoitos amanteigados unidos pelo doce. Unidade.',
      image: 'Casadinho.jpg',
      category: 'Doces'
    },
    {
      id: 27,
      name: 'Lua de Mel',
      price: 4.50,
      description: 'Doce lua de mel com cobertura de chocolate branco e recheio cremoso. Delicado e saboroso. Unidade.',
      image: 'Lua_de_mel.jpg',
      category: 'Doces'
    },

    // === SALGADOS ===
    {
      id: 28,
      name: 'Coxinha (6 un)',
      price: 18.00,
      description: 'Coxinha crocante recheada com frango desfiado e catupiry. Massa sequinha e saborosa.',
      image: 'Coxinha.jpg',
      category: 'Salgados'
    },
    {
      id: 29,
      name: 'Kibe (6 un)',
      price: 20.00,
      description: 'Kibe frito crocante recheado com carne temperada. Receita tradicional árabe.',
      image: 'Kibe.jpg',
      category: 'Salgados'
    },
    {
      id: 30,
      name: 'Esfirra de Queijo (6 un)',
      price: 18.00,
      description: 'Esfirra aberta com recheio generoso de queijo derretido. Massa macia e saborosa.',
      image: 'Esfirra_de_queijo.jpg',
      category: 'Salgados'
    },
    {
      id: 31,
      name: 'Esfirra de Carne (6 un)',
      price: 20.00,
      description: 'Esfirra aberta com carne moída temperada com especiarias. Receita libanesa.',
      image: 'Esfirra_de_carne.jpg',
      category: 'Salgados'
    },
    {
      id: 32,
      name: 'Empada de Camarão com Catupiry (6 un)',
      price: 25.00,
      description: 'Empada artesanal com recheio cremoso de camarão e catupiry. Massa amanteigada.',
      image: 'Empada_de_camarao.jpg',
      category: 'Salgados'
    },
    {
      id: 33,
      name: 'Bolinha de Queijo (10 un)',
      price: 16.00,
      description: 'Bolinha de queijo frita crocante com queijo derretido por dentro. Porção com 10 unidades.',
      image: 'Bolinho_de_queijo.jpg',
      category: 'Salgados'
    },
    {
      id: 34,
      name: 'Folhado de Frango',
      price: 8.50,
      description: 'Massa folhada crocante recheada com frango cremoso. Assado no forno até dourar.',
      image: 'Folhado_de_frango.jpg',
      category: 'Salgados'
    },
    {
      id: 35,
      name: 'Folhado de Queijo',
      price: 7.50,
      description: 'Massa folhada dourada com recheio de queijo mussarela derretido. Crocante e saboroso.',
      image: 'Folhado_de_queijo.jpg',
      category: 'Salgados'
    },
    {
      id: 36,
      name: 'Risole de Presunto e Queijo (6 un)',
      price: 19.00,
      description: 'Risole crocante com recheio de presunto e queijo derretido. Massa fina e sequinha.',
      image: 'Risole_de_presunto_queijo.jpg',
      category: 'Salgados'
    },
    {
      id: 37,
      name: 'Quiche Lorraine',
      price: 22.00,
      description: 'Quiche clássica com bacon, queijo gruyère e creme fresco. Base de massa amanteigada.',
      image: 'Quiche.jpg',
      category: 'Salgados'
    },

    // === TORTAS SALGADAS ===
    {
      id: 38,
      name: 'Torta de Queijo',
      price: 35.00,
      description: 'Torta salgada com recheio cremoso de queijos selecionados. Massa crocante. Serve até 8 pessoas.',
      image: 'Torta_de_Queijo.jpg',
      category: 'Torta Salgada'
    },
    {
      id: 39,
      name: 'Torta de Frango',
      price: 38.00,
      description: 'Torta de frango desfiado com tempero caseiro e massa macia. Serve até 8 pessoas.',
      image: 'Torta_de_frango.jpg',
      category: 'Torta Salgada'
    },
    {
      id: 40,
      name: 'Torta de Presunto e Queijo',
      price: 36.00,
      description: 'Torta recheada com presunto e queijo derretido. Massa leve e crocante. Serve até 8 pessoas.',
      image: 'Torta_de_presunto_queijo.jpg',
      category: 'Torta Salgada'
    },
    {
      id: 41,
      name: 'Torta de Calabresa',
      price: 37.00,
      description: 'Torta com calabresa fatiada, cebola e queijo. Sabor defumado irresistível. Serve até 8 pessoas.',
      image: 'Torta_de_calabresa.jpg',
      category: 'Torta Salgada'
    },
    {
      id: 42,
      name: 'Torta de Palmito',
      price: 40.00,
      description: 'Torta cremosa de palmito com tempero suave. Massa amanteigada. Serve até 8 pessoas.',
      image: 'Torta_de_palmito.jpg',
      category: 'Torta Salgada'
    },
    {
      id: 43,
      name: 'Torta de Atum',
      price: 36.00,
      description: 'Torta de atum com azeitonas e temperos especiais. Leve e saborosa. Serve até 8 pessoas.',
      image: 'Torta_de_atum.jpg',
      category: 'Torta Salgada'
    },

    // === TORTAS DOCES ===
    {
      id: 44,
      name: 'Torta de Chocolate',
      price: 48.00,
      description: 'Torta com base crocante e recheio de ganache de chocolate meio amargo. Serve até 10 pessoas.',
      image: 'Torta_de_chocolate.jpg',
      category: 'Torta Doce'
    },
    {
      id: 45,
      name: 'Torta Holandesa',
      price: 50.00,
      description: 'Torta holandesa com creme de baunilha, biscoito e cobertura de chocolate. Serve até 10 pessoas.',
      image: 'Torta_holandesa.jpg',
      category: 'Torta Doce'
    },
    {
      id: 46,
      name: 'Torta de Limão',
      price: 42.00,
      description: 'Torta com creme de limão siciliano e merengue tostado. Base de biscoito. Serve até 8 pessoas.',
      image: 'Torta_de_limao.jpg',
      category: 'Torta Doce'
    },
    {
      id: 47,
      name: 'Torta de Maracujá',
      price: 42.00,
      description: 'Torta de maracujá com mousse cremosa e calda de frutas. Refrescante. Serve até 8 pessoas.',
      image: 'Torta_de_maracuja.jpg',
      category: 'Torta Doce'
    },
    {
      id: 48,
      name: 'Torta de Maçã',
      price: 44.00,
      description: 'Torta de maçã com canela e massa folhada crocante. Receita clássica americana. Serve até 8 pessoas.',
      image: 'Torta_de_maca.jpg',
      category: 'Torta Doce'
    },
    {
      id: 49,
      name: 'Torta de Banana',
      price: 40.00,
      description: 'Torta de banana caramelizada com canela e creme. Base de massa amanteigada. Serve até 8 pessoas.',
      image: 'Torta_de_banana.jpg',
      category: 'Torta Doce'
    },
    {
      id: 50,
      name: 'Torta de Banoffee',
      price: 46.00,
      description: 'Torta banoffee com banana, doce de leite e chantilly. Irresistível. Serve até 8 pessoas.',
      image: 'Torta_de_banoffee.jpg',
      category: 'Torta Doce'
    },
    {
      id: 51,
      name: 'Torta de Doce de Leite',
      price: 44.00,
      description: 'Torta com recheio cremoso de doce de leite e cobertura de chantilly. Serve até 8 pessoas.',
      image: 'Torta_de_doce_de_leite.jpg',
      category: 'Torta Doce'
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  searchProducts(term: string): Product[] {
    const lower = term.toLowerCase();
    return this.products.filter(p =>
      p.name.toLowerCase().includes(lower) ||
      p.category.toLowerCase().includes(lower) ||
      p.description.toLowerCase().includes(lower)
    );
  }

  getCategories(): string[] {
    return [...new Set(this.products.map(p => p.category))];
  }
}