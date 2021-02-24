"use strict";
const Generator = require("yeoman-generator");
const mkdirp = require("mkdirp");
const _ = require("lodash");

const pascalCase = _.flow(_.camelCase, _.upperFirst);
const spaceCase = name => _.replace(_.kebabCase(name), "-", " ");

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument("name", { type: String, required: true });
  }

  prompting() {
    const prompts = [
      {
        type: "list",
        name: "type",
        message: "Choose component type:",
        choices: ["component", "styled"]
      },
      {
        when: response => response.type === "component",
        type: "list",
        name: "testType",
        message: "Choose testing library",
        choices: ["rtl", "enzyme"]
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    mkdirp(this.options.name);
    this.destinationRoot(this.destinationPath(this.options.name));
    this.fs.copyTpl(
      this.templatePath("index.ejs"),
      this.destinationPath("index.ts"),
      {
        path: this.options.name
      }
    );

    this.fs.copyTpl(
      this.templatePath(this.getTestTemplate()),
      this.destinationPath(`${this.options.name}.test.tsx`),
      {
        path: this.options.name,
        componentName: pascalCase(this.options.name),
        description: spaceCase(this.options.name)
      }
    );
    this.fs.copyTpl(
      this.templatePath(`${this.props.type}.ejs`),
      this.destinationPath(`${this.options.name}.tsx`),
      {
        componentName: pascalCase(this.options.name)
      }
    );
  }

  install() {}

  getTestTemplate() {
    if (this.props.type === "component") {
      return `${this.props.type}-${this.props.testType}-test.ejs`;
    }

    return `${this.props.type}-test.ejs`;
  }
};
