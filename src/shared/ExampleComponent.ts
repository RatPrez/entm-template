import { Component, sync, ignore } from "@ratprez/entm";

// to read what sync('full') and ignore does, reference the DOCS: https://github.com/RatPrez/entm-core/blob/master/docs/network.md
@sync('full')
export class ExampleComponent extends Component {
    public money: number = 0; // MONEY!!!!

    @ignore // lets not tell the clients about this one...
    public bankPin: number = 0;
}
