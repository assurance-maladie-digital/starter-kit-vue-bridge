# Migration
Etapes de migration

# Routes custom

## Migration des composants de vue-class-component vers vue-facing-decorator

vue-class-component n'est plus maintenu, vue-class-decorator est une alternative qui permet de migrer facilement. Il possède certaines similarités dans sa syntaxe mais nécessite tout de même un certain nombre de modifications.

1. Changer les imports, et la méthode de déclaration des composants.

```typescript
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class HelloWorld extends Vue {}
```

devient

```typescript
import { Component, Vue } from 'vue-facing-decorator';

@Component
class HelloWorld extends Vue {}

export default toNative(HelloWorld);
```


2. Changer la manière de déclarer les props

vue-facing-decorator ne permet de n'heriter que d'une autre classe, il n'est pas possible de déclarer des mixins de la même manière que avec vue-class-component.
vue-facing-decorator ne met pas à disposition un helper 'mixins' de la même façon que vue-class-component.

```typescript
@Component
class HelloWorld extends Vue {

  @Prop({ default: 'Hello World' })
  msg!: string;

  @Prop({ required: true })
  propRequired!: string;
}
```


3. Changer la manière de déclarer les références vers les éléments du DOM

```typescript
    $refs!: {
        input: HTMLInputElement,
        div: HTMLDivElement
    }
```

devient

```typescript
    @Ref
    readonly refInput!: HTMLInputElement

    @Ref
    readonly refDiv!: HTMLDivElement
```


4. Changer la manière de déclarer les watchers


```typescript
@Watch('nom-de-la-variable', {
  immediate: true,
  deep: true
})
watchVar(newValue: string, oldValue: string) {}
```


5. Changer la manière de déclarer les models

Le model est rattaché à `modelValue` par défaut.

```typescript
  @Model
  value!: string;

  @Model({
    name: errors
  })
  errors!: string[];
```

---

La déclaration d'une variable, d'une fonction, des computeds sont identiques à vue-class-component.
Pour plus d'informations, vous pouvez consulter la documentation de [vue-facing-decorator.](https://facing-dev.github.io/vue-facing-decorator)



